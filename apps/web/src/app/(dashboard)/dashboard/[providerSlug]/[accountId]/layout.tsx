"use client";

import type { ReactNode } from "react";

import { DownloadProvider } from "@/components/providers/download-provider";
import { AccountProvider } from "@/components/providers/account-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/sidebar";

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<AccountProvider>
			<DownloadProvider>
				<SidebarProvider className="has-data-[variant=inset]:dark:bg-neutral-800">
					<AppSidebar variant="inset" className="px-0 py-0" />
					<SidebarInset className="md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-0">
						<main className="flex-1 p-1">{children}</main>
					</SidebarInset>
				</SidebarProvider>
			</DownloadProvider>
		</AccountProvider>
	);
}
