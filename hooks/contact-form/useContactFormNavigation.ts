"use client";

import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FORM_PARAMS } from "@/constants/form/form";
import { NAVIGATION } from "@/constants/navigation/navigation";

export function useContactFormNavigation() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const scrollToForm = useCallback(() => {
        document.getElementById(NAVIGATION.CONTACT_FORM)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, []);

    const navigateToProject = useCallback(
        (project: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(FORM_PARAMS.PROJECT_TYPE, project);

            router.replace(`${pathname}?${params.toString()}`, {
                scroll: false,
            });
        },
        [pathname, router, searchParams]
    );

    const handleLinkClick = useCallback(
        (project: string) =>
            (e: React.MouseEvent<HTMLAnchorElement>) => {
                const currentProject = searchParams.get(FORM_PARAMS.PROJECT_TYPE);

                if (currentProject === project) {
                    e.preventDefault();
                    scrollToForm();
                }
            },
        [scrollToForm, searchParams]
    );

    return {
        scrollToForm,
        navigateToProject,
        handleLinkClick,
    };
}