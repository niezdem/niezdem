import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => (
      <p className="text-base text-zinc-100/75">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="font-unbounded text-3xl text-zinc-100">{children}</h1>
    ),
    a: ({ children, href, ...props }) => (
      <a href={href} target="_blank" className=" text-zinc-100" {...props}>
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className=" text-zinc-100">{children}</strong>
    ),
    ...components,
  };
}
