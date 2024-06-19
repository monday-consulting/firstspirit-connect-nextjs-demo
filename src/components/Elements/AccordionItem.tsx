interface AccordionItemProps {
  primary?: boolean;
  label: string;
}

export const AccordionItem = ({
  label,
  primary = true.
}: AccordionItemProps) => {
  const mode = primary ? 'storybook-accordionitem--primary' : 'storybook-accordionitem--secondary';
  return(
    <h1>{ label }</h1>
  )
}
