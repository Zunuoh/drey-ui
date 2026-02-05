import { forwardRef, type ComponentProps } from "react"

export type BoxProps = ComponentProps<"div">;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
    ({...props}: BoxProps, ref) => {
    return(
        <div ref={ref} {...props}/>
    )
}
)