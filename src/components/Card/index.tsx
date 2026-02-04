import { cn } from "../../utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type ComponentProps } from "react"

const cardStyles = cva(["w-full", "rounded-md"], {
    variants: {
        variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
        size: {
            sm: "h-5 px-2 py-2",
            md: "h-10 px-4 py-4",
            lg: "h-20 px-6 py-6",
        },
        colorscheme: {
            primary: "text-white"
        },
    },
    compoundVariants: [
        {
            variant: "solid",
            colorscheme: "primary",
            className: "text-white border-primary bg-primary border-4 flex justify-center items-center hover:bg-primary-600",
        }
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
         
}
    
)

type CardProps = ComponentProps<'div'> & VariantProps<typeof cardStyles>

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({variant, size, colorscheme, className, ...props}, ref) => {
        return(
            <div ref={ref} className={cn(cardStyles({variant, size, colorscheme, className}))} {...props}/>
        )
    }
)

// export const Card = () => {
//     <div className={cn(cardStyles({size}))}/>
// }

