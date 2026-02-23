import { cn } from "../../utils"
import { cva, type VariantProps } from "class-variance-authority"
import { User } from "lucide-react"
import { forwardRef, type ComponentProps } from "react"

const miniCardStyles = cva(["w-full", "rounded-md"], {
    variants: {
        variant: {
            solid: "",
        },
        size: {
            sm: "h-auto w-35 px-2 py-2 flex items-center justify-center flex-col border border-gray-100",
        },
        colorscheme: {
            primary: "text-black"
        },
    },
    compoundVariants: [
        {
            variant: "solid",
            colorscheme: "primary",
            className: "bg-transparent shadow-xl p-3 rounded-2xl",
        }
    ],
    defaultVariants: {
      variant: "solid",
      size: "sm",
      colorscheme: "primary",
    },
})

type MiniCardProps = ComponentProps<'div'> & VariantProps<typeof miniCardStyles> & {
    name?: string,
    id?: string
}

export const MiniCard = forwardRef<HTMLDivElement, MiniCardProps>(
    ({variant, size, colorscheme, ...props}, ref) => {
        return (
            <div ref={ref} className={cn(miniCardStyles({variant, size, colorscheme}))}{...props}>
                <div className="w-10 h-10 rounded-full shadow-xl flex justify-center items-center bg-amber-100">
                    <User/>
                </div>
                <div className="mt-3 font-medium">{props.name}</div>
                <div className="text-xs">{props.id}</div>
            </div>
        )
    }
)