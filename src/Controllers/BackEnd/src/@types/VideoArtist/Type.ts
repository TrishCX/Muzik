export interface Type {
  responseContext: ResponseContext;
  contents: Contents;
  trackingParams: string;
}

export interface Contents {
  tabbedSearchResultsRenderer: TabbedSearchResultsRenderer;
}

export interface TabbedSearchResultsRenderer {
  tabs: Tab[];
}

export interface Tab {
  tabRenderer: TabRenderer;
}

export interface TabRenderer {
  title: string;
  selected: boolean;
  content: TabRendererContent;
  tabIdentifier: string;
  trackingParams: string;
}

export interface TabRendererContent {
  sectionListRenderer: SectionListRenderer;
}

export interface SectionListRenderer {
  contents: SectionListRendererContent[];
  trackingParams: string;
  header: Header;
}

export interface SectionListRendererContent {
  musicShelfRenderer: MusicShelfRenderer;
}

export interface MusicShelfRenderer {
  title: Title;
  contents: MusicShelfRendererContent[];
  trackingParams: string;
  continuations: Continuation[];
  shelfDivider: ShelfDivider;
}

export interface MusicShelfRendererContent {
  musicResponsiveListItemRenderer: MusicResponsiveListItemRenderer;
}

export interface MusicResponsiveListItemRenderer {
  trackingParams: string;
  thumbnail: MusicResponsiveListItemRendererThumbnail;
  flexColumns: FlexColumn[];
  menu: Menu;
  flexColumnDisplayStyle: string;
  navigationEndpoint: MusicResponsiveListItemRendererNavigationEndpoint;
  itemHeight: ItemHeight;
}

export interface FlexColumn {
  musicResponsiveListItemFlexColumnRenderer: MusicResponsiveListItemFlexColumnRenderer;
}

export interface MusicResponsiveListItemFlexColumnRenderer {
  text: Title;
  displayPriority: DisplayPriority;
}

export enum DisplayPriority {
  MusicResponsiveListItemColumnDisplayPriorityHigh = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_HIGH",
}

export interface Title {
  runs: Run[];
}

export interface Run {
  text: string;
}

export enum ItemHeight {
  MusicResponsiveListItemHeightTall = "MUSIC_RESPONSIVE_LIST_ITEM_HEIGHT_TALL",
}

export interface Menu {
  menuRenderer: MenuRenderer;
}

export interface MenuRenderer {
  items: Item[];
  trackingParams: string;
  accessibility: Accessibility;
}

export interface Accessibility {
  accessibilityData: AccessibilityData;
}

export interface AccessibilityData {
  label: string;
}

export interface Item {
  menuNavigationItemRenderer: MenuNavigationItemRenderer;
}

export interface MenuNavigationItemRenderer {
  text: Title;
  icon: Icon;
  navigationEndpoint: MenuNavigationItemRendererNavigationEndpoint;
  trackingParams: string;
}

export interface Icon {
  iconType: IconType;
}

export enum IconType {
  Close = "CLOSE",
  Mix = "MIX",
  MusicShuffle = "MUSIC_SHUFFLE",
  Share = "SHARE",
}

export interface MenuNavigationItemRendererNavigationEndpoint {
  clickTrackingParams: string;
  watchPlaylistEndpoint?: WatchPlaylistEndpoint;
  shareEntityEndpoint?: ShareEntityEndpoint;
}

export interface ShareEntityEndpoint {
  serializedShareEntity: string;
  sharePanelType: SharePanelType;
}

export enum SharePanelType {
  SharePanelTypeUnifiedSharePanel = "SHARE_PANEL_TYPE_UNIFIED_SHARE_PANEL",
}

export interface WatchPlaylistEndpoint {
  playlistId: string;
  params: Params;
}

export enum Params {
  WAEB = "wAEB",
  WAEB8GECGAE3D = "wAEB8gECGAE%3D",
}

export interface MusicResponsiveListItemRendererNavigationEndpoint {
  clickTrackingParams: string;
  browseEndpoint: BrowseEndpoint;
}

export interface BrowseEndpoint {
  browseId: string;
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}

export interface BrowseEndpointContextSupportedConfigs {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig;
}

export interface BrowseEndpointContextMusicConfig {
  pageType: PageType;
}

export enum PageType {
  MusicPageTypeArtist = "MUSIC_PAGE_TYPE_ARTIST",
}

export interface MusicResponsiveListItemRendererThumbnail {
  musicThumbnailRenderer: MusicThumbnailRenderer;
}

export interface MusicThumbnailRenderer {
  thumbnail: MusicThumbnailRendererThumbnail;
  thumbnailCrop: ThumbnailCrop;
  thumbnailScale: ThumbnailScale;
  trackingParams: string;
}

export interface MusicThumbnailRendererThumbnail {
  thumbnails: ThumbnailElement[];
}

export interface ThumbnailElement {
  url: string;
  width: number;
  height: number;
}

export enum ThumbnailCrop {
  MusicThumbnailCropCircle = "MUSIC_THUMBNAIL_CROP_CIRCLE",
}

export enum ThumbnailScale {
  MusicThumbnailScaleAspectFill = "MUSIC_THUMBNAIL_SCALE_ASPECT_FILL",
}

export interface Continuation {
  nextContinuationData: NextContinuationData;
}

export interface NextContinuationData {
  continuation: string;
  clickTrackingParams: string;
}

export interface ShelfDivider {
  musicShelfDividerRenderer: MusicShelfDividerRenderer;
}

export interface MusicShelfDividerRenderer {
  hidden: boolean;
}

export interface Header {
  chipCloudRenderer: ChipCloudRenderer;
}

export interface ChipCloudRenderer {
  chips: Chip[];
  collapsedRowCount: number;
  trackingParams: string;
  horizontalScrollable: boolean;
}

export interface Chip {
  chipCloudChipRenderer: ChipCloudChipRenderer;
}

export interface ChipCloudChipRenderer {
  style: Style;
  navigationEndpoint: ChipCloudChipRendererNavigationEndpoint;
  trackingParams: string;
  icon?: Icon;
  accessibilityData: Accessibility;
  isSelected: boolean;
  text?: Title;
  uniqueId?: string;
}

export interface ChipCloudChipRendererNavigationEndpoint {
  clickTrackingParams: string;
  searchEndpoint: SearchEndpoint;
}

export interface SearchEndpoint {
  query: Query;
  params?: string;
}

export enum Query {
  DaftPunk = "Daft punk",
}

export interface Style {
  styleType: StyleType;
}

export enum StyleType {
  StyleDefault = "STYLE_DEFAULT",
  StylePrimary = "STYLE_PRIMARY",
  StyleSecondary = "STYLE_SECONDARY",
}

export interface ResponseContext {
  serviceTrackingParams: ServiceTrackingParam[];
  maxAgeSeconds: number;
}

export interface ServiceTrackingParam {
  service: string;
  params: Param[];
}

export interface Param {
  key: string;
  value: string;
}
