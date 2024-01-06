export function formatAssets(item: any) {
  if (!item?.coverArt) {
    return item.images?.items[0].sources.at(-1)?.url;
  } else {
    return item.coverArt.sources.at(-1)?.url;
  }
}
