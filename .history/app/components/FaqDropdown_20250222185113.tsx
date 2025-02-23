"use client";
import { Accordion, AccordionItem } from "@heroui/react";

export default function FaqDropdown() {
	const defaultContent = "test FAQ";

	return (
		<Accordion variant="splitted">
			<AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
				{defaultContent}
			</AccordionItem>
			<AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
				{defaultContent}
			</AccordionItem>
			<AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
				{defaultContent}
			</AccordionItem>
		</Accordion>
	);
}
