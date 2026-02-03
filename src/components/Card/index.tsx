import { cn } from "@/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, type ComponentProps } from "react"

const cardStyles = cva("w-full", {
    variants: {
        size: {
            sm: "h-5 px-2 py-2",
            md: "h-10 px-4 py-4"
        }
    }
}
    
)

type CardProps = ComponentProps<'div'> & VariantProps<typeof cardStyles>

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({size, className, ...props}) => {
        return(
            <div className={cn(cardStyles({size}))} {...props}/>
        )
    }
)

// export const Card = () => {
//     <div className={cn(cardStyles({size}))}/>
// }

