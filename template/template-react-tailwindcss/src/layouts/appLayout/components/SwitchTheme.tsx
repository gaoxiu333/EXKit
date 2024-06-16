import { THEMES } from "../../../lib/storages/themes";
import { Check, Palette } from "lucide-react";
import { useTheme } from "next-themes";

import clsx from "clsx";

const SwitchTheme = () => {
    const { resolvedTheme, setTheme } = useTheme();

    const handleThemeChange = (event: React.MouseEvent<HTMLButtonElement>, currentTheme: string) => {
        event.preventDefault();
        const isSameTheme = resolvedTheme === currentTheme;
        setTheme(currentTheme);
        try {
            if (document.startViewTransition === undefined) {
                throw new Error();
            }
            const { clientX, clientY } = event;
            const endRadius = Math.hypot(Math.max(clientX, window.innerWidth - clientX), Math.max(clientY, window.innerHeight - clientY));
            const transition = document.startViewTransition(() => {});
            transition.ready.then(() => {
                const clipPath = [`circle(0px at ${clientX}px ${clientY}px)`, `circle(${endRadius}px at ${clientX}px ${clientY}px)`];
                document.documentElement.animate(
                    {
                        clipPath: isSameTheme ? [...clipPath].reverse() : clipPath,
                    },
                    {
                        duration: 500,
                        easing: "ease-in",
                        pseudoElement: isSameTheme ? "::view-transition-old(root)" : "::view-transition-new(root)",
                    },
                );
            });
        } catch (error) {
            console.error("error", error);
        }
    };
    return (
        <div className="dropdown dropdown-end hidden [@supports(color:oklch(0%_0_0))]:block">
            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
                <Palette />
            </div>
            <div tabIndex={0} className="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16">
                <div className="grid grid-cols-1 gap-3 p-3">
                    {THEMES.map((theme) => (
                        <button key={theme} onClick={(event) => handleThemeChange(event, theme)} className="outline-base-content text-start outline-offset-4">
                            <span data-theme={theme} className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                <span className="grid grid-cols-5 grid-rows-3">
                                    <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                        <Check className={clsx(resolvedTheme === theme ? "visible" : "invisible")} />
                                        <span className="flex-grow text-sm">{theme}</span>
                                        <span className="flex h-full shrink-0 flex-wrap gap-1">
                                            <span className="w-2 rounded bg-primary" />
                                            <span className="w-2 rounded bg-secondary" />
                                            <span className="w-2 rounded bg-accent" />
                                            <span className="w-2 rounded bg-neutral" />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
export { SwitchTheme };
