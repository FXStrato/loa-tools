export function formatNumber(value: number | string, options?: Intl.NumberFormatOptions) {
  return value !== '' ? new Intl.NumberFormat('en-US', options).format(value as number) : value;
}
