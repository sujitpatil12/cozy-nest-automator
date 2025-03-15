
import * as React from "react"
import { cva } from "class-variance-authority"
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button-shadcn"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group fixed left-0 top-0 z-30 h-screen flex flex-col border-r bg-background data-[collapsed=true]:w-[--sidebar-collapsed-width] data-[collapsed=false]:w-[--sidebar-width] transition-[width] duration-300 ease-in-out",
      className
    )}
    {...props}
  />
))
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-14 items-center border-b px-4", className)}
    {...props}
  />
))
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-y-auto py-2", className)}
    {...props}
  />
))
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center border-t p-4", className)}
    {...props}
  />
))
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("pb-4", className)}
    {...props}
  />
))
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-2 pb-2 pt-4 text-xs font-medium text-muted-foreground group-[[data-collapsed=true]]:text-center",
      className
    )}
    {...props}
  />
))
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-1", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

type SidebarMenuProps = React.HTMLAttributes<HTMLDivElement>

const SidebarMenu = React.forwardRef<HTMLDivElement, SidebarMenuProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center",
        className
      )}
      {...props}
    />
  )
)
SidebarMenu.displayName = "SidebarMenu"

type SidebarMenuItemProps = React.HTMLAttributes<HTMLDivElement> & {
  active?: boolean
  disabled?: boolean
}

const SidebarMenuItem = React.forwardRef<HTMLDivElement, SidebarMenuItemProps>(
  ({ className, active, disabled, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-full",
        disabled && "pointer-events-none opacity-50",
        className
      )}
      {...props}
    />
  )
)
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "flex justify-start rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[[data-collapsed=true]]:justify-center",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 px-2",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "default",
    },
  }
)

type SidebarMenuButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean
    variant?: "default" | "outline" | "ghost"
    size?: "default" | "sm" | "lg"
    active?: boolean
  }

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      children,
      className,
      variant,
      size,
      asChild = false,
      active,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? React.Fragment : "button"
    const innerContent = (
      <button
        ref={ref}
        type="button"
        data-active={active}
        className={cn(
          sidebarMenuButtonVariants({ variant, size, className }),
          "group-[[data-collapsed=true]]:px-2 w-full"
        )}
        {...props}
      >
        {children}
      </button>
    )

    if (asChild) {
      return React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<any>, {
            ...props,
            className: cn(
              sidebarMenuButtonVariants({ variant, size }),
              "group-[[data-collapsed=true]]:px-2 w-full",
              (children as React.ReactElement<any>).props.className
            ),
            "data-active": active,
            children: (children as React.ReactElement<any>).props.children,
          })
        : null
    }

    return <Comp>{innerContent}</Comp>
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

interface SidebarContextValue {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = React.createContext<SidebarContextValue>({
  collapsed: false,
  setCollapsed: () => {},
})

function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false)

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--sidebar-width",
      "240px"
    )
    document.documentElement.style.setProperty(
      "--sidebar-collapsed-width",
      "64px"
    )
  }, [])

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      <div
        data-collapsed={collapsed}
        className="grid min-h-screen w-full grid-cols-[--sidebar-width,1fr] data-[collapsed=true]:grid-cols-[--sidebar-collapsed-width,1fr] transition-all"
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

function useSidebar() {
  const context = React.useContext(SidebarContext)

  if (context === undefined)
    throw new Error("useSidebar must be used within a SidebarProvider")

  return context
}

const SidebarTrigger = () => {
  const { collapsed, setCollapsed } = useSidebar()

  return (
    <button
      className={cn(
        buttonVariants({ variant: "outline", size: "icon" }),
        "fixed left-[var(--sidebar-width)] top-3 z-40 -translate-x-1/2 rounded-full border shadow-md data-[collapsed=true]:left-[var(--sidebar-collapsed-width)]"
      )}
      data-collapsed={collapsed}
      onClick={() => setCollapsed((prev) => !prev)}
    >
      {collapsed ? (
        <ChevronRight className="h-4 w-4" />
      ) : (
        <ChevronLeft className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  )
}

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
}
