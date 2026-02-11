import { cn } from "../../utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, Clock8, MoveLeft, X } from "lucide-react";
import { forwardRef, type ComponentProps } from "react"

const badgeStyles = cva(
    ["w-full", "rounded-md"],
    {
        variants: {
            variant: {
                solid: "",
                outline: "border-1",
                ghost: "border-amber-400"
            },
            size: {
                sm: "px-2 py-2 h-5",
                md: "px-4 py-4 h-8",
                lg: "px-6 py-6 h-10"
            },
            colorscheme: {
                primary: "text-white",
                success: "text-white",
                error: "text-red-500",
                pending: "text-white",
                refund: "text-white"
            }
        },
        compoundVariants: [
            // success
            {
                variant: "solid",
                colorscheme: "success",
                className: "bg-success hover:bg-success-600 flex justify-center items-center",
            },
            {
                variant: "outline",
                colorscheme: "success",
                className:
                "text-success-light border-success bg-transparent hover:bg-success-100",
            },
            // error
            {
                variant: "solid",
                colorscheme: "error",
                className: "bg-error text-white"
            },
            {
                variant: "outline",
                colorscheme: "error",
                className: "text-error border-error bg-error-light"
            },
            // pending
            {
                variant:"solid",
                colorscheme: "pending",
                className: "bg-pending text-white"

            },
            {
                variant: "outline",
                colorscheme: "pending",
                className: "text-pending border-pending bg-pending-100 bg-pending-light"
            },
            // refunded
            {
                variant: "solid",
                colorscheme: "refund",
                className: "bg-refund text-white"
            },
            {
                variant: "outline",
                colorscheme:"refund",
                className: "bg-refund-light text-white"
            },
        ],
        defaultVariants: 
            {
                variant: "solid",
                size: "md",
                colorscheme: "error"
            }
        

   }

)

type BadgeProps = ComponentProps<'div'> & VariantProps<typeof badgeStyles>;

    export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
        ({ variant, size, colorscheme, className, children, ...props }, ref) => {
            return (
                <div
                    ref={ref}
                    className={cn(
                        badgeStyles({ variant, size, colorscheme }),
                        "flex items-center justify-between",
                        className
                    )}
                    {...props}
                >
                    <span className="truncate">
                        {colorscheme === "success" ? (
                            <Check className="w-4 h-4" />
                        ) : colorscheme === "error" ? (
                            <X className="w-4 h-4" />
                        ) : colorscheme === "pending" ? (
                            <Clock8 className="w-4 h-4" />
                        ) : colorscheme === "refund" ? (
                            <MoveLeft className="w-4 h-4" />
                        ) : (
                            <Check className="w-4 h-4" />
                        )}
                    </span>
                    <div
                        className="ml-2 "
                    >
                        {children ?? "Badge text"}
                    </div>
                     
                </div>
            )
        }
    )
