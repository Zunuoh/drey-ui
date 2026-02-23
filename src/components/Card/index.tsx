import { cn } from "../../utils"
import { cva, type VariantProps } from "class-variance-authority"
import { User } from "lucide-react"
import { forwardRef, type ComponentProps } from "react"

const cardStyles = cva(["w-full", "rounded-md"], {
    variants: {
        variant: {
        solid: "",
      },
        size: {
            lg: "h-auto w-60 px-2 py-2",
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
      size: "lg",
      colorscheme: "primary",
    },
         
}
    
)

type CardProps = ComponentProps<'div'> & VariantProps<typeof cardStyles> & {
    name?: string;
    description?: string;
    followers?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({variant, size, colorscheme, className, children, ...props}, ref) => {
        return(
            <div ref={ref} className={cn(cardStyles({variant, size, colorscheme, className}))} {...props}>
                <div className=" h-60 rounded-3xl border border-gray-300">
                    <img src="" alt="Description of image" className="w-full h-full object-cover rounded-3xl" />
                </div>
                <div className="mt-2 text-2xl font-medium">{props.name}</div>
                <div className=" text-sm">{props.description}</div>
                <div className="flex mt-3">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex gap-3">
                            <div className="flex">
                                <User className="w-5 h-5"/>
                                <div>524</div>
                            </div>
                            <div className="flex">
                                <User className="w-5 h-5 ml-2"/>
                                <div>16</div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="text-black shadow-lg p-2 rounded-2xl bg-gray-200">
                                {props.followers}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)


