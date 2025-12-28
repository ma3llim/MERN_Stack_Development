import type { PropsWithChildren, ReactNode } from "react";

interface ChildrenCardProp extends PropsWithChildren {
    title: string;
    footer?: ReactNode;
}

export function ChildrenCard({ title, children, footer }: ChildrenCardProp) {
    return (
        <section>
            <h2>{title}</h2>
            <div>{children}</div>
            {footer ? <footer>{footer}</footer> : null}
        </section>
    );
}
