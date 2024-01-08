export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
