import { cn } from "../../utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type ComponentProps } from "react"

const badgeStyles = cva(
    ["w-full", "rounded-md"],
    {
        variants: {
            variant: {
                solid: "",
                outline: "border-2",
                ghost: "border-amber-400"
            },
            size: {
                sm: "px-2 py-2 h-5",
                md: "px-4 py-4 h-8",
                lg: "px-6 py-6 h-10"
            },
            colorscheme: {
                primary: "text-white"
            }
        },
        compoundVariants: [
            {
                variant: "solid",
                colorscheme: "primary",
                className: "bg-primary hover:bg-primary-600 flex justify-center items-center",
            },
            {
                variant: "outline",
                colorscheme: "primary",
                className:
                "text-primary-600 border-primary bg-transparent hover:bg-primary-100",
            },
            {
                variant: "ghost",
                colorscheme: "primary",
                className: "text-primary bg-transparent hover:bg-primary-100",
            },
        ],
        defaultVariants: 
            {
                variant: "solid",
                size: "md",
                colorscheme: "primary"
            }
        

   }

)

type BadgeProps = ComponentProps<'div'> & VariantProps<typeof badgeStyles>;

    // export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
    //     ({variant, size, colorscheme, className, ...props}, ref) => {
    //         return(
    //             <div ref={ref} className={cn(badgeStyles({variant, size, colorscheme, className}))}
    //             {...props}/>
    //         );
    //     }
    // )

    export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
        ({variant, size, colorscheme, className, ...props}, ref) => {
            return(
                <div ref={ref} className={cn(badgeStyles({variant, size, colorscheme, className}))} {...props}/>
            )
        }
    )



// export const Badge = (props: BadgeProps) => {
//     return(
//         <span {...props}/>
//     )
// }