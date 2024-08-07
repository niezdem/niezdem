-- Create user_rights enum type
create type user_rights as enum ('ADMIN', 'USER');

-- Create users table
create table users
(
    id          uuid                       not null,
    full_name   text                       not null,
    email       text                       not null,
    user_rights user_rights default 'USER' not null,

    primary key (id),
    foreign key (id) references auth.users (id) on update cascade on delete cascade
);

-- Enable row level security on users table
alter table users
    enable row level security;

-- Create policy for read access for users
create policy "Enable read access for user" on users for select using (auth.uid() = id);

-- Create function handle_new_user
create or replace function handle_new_user() returns trigger
    language plpgsql
    security definer set search_path = public as
$$
begin
    insert into users (id, full_name, email)
    values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', ''), new.email);
    return new;
end;
$$;

-- Create function is_admin
create or replace function is_admin() returns boolean
    language plpgsql as
$$
begin
    return exists ( select 1 from users where id = auth.uid() and user_rights = 'ADMIN' );
end;
$$;

-- Create trigger on_auth_user_created
create trigger on_auth_user_created
    after insert
    on auth.users
    for each row
execute procedure handle_new_user();

-- Create platform_type enum type
create type platform_type as enum ('PC', 'Xbox', 'PlayStation', 'Steam Deck', 'Nintendo');

-- Create games table
create table games
(
    id            uuid primary key         not null default gen_random_uuid(),
    name          text                     not null,
    platform      platform_type            not null,
    finished_date date                     not null default now(),
    created_at    timestamp with time zone not null default now()
);

-- Enable row level security on games table
alter table games
    enable row level security;

-- Create policy for read access for all users on games table
create policy "Enable read access for all users" on games as permissive for select to public using (true);

-- Create policy for all operations for ADMIN users only on games table
create policy "Enable all operations for ADMIN users only" on games for all 

-- Create travels table
create table travels
(
    id           uuid primary key         not null default gen_random_uuid(),
    city         text                     not null,
    country      text                     not null,
    country_flag text                     not null,
    start_date   date                     not null default now(),
    end_date     date                     not null default now(),
    created_at   timestamp with time zone not null default now()
);

-- Enable row level security on travels table
alter table travels
    enable row level security;

-- Create policy for read access for all users on travels table
create policy "Enable read access for all users" on travels as permissive for select to public using (true);

-- Create policy for all operations for ADMIN users only on travels table
create policy "Enable all operations for ADMIN users only" on travels for all 