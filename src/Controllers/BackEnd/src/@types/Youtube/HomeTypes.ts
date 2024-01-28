export interface YoutubeHomeResponse {
  responseContext: ResponseContext;
  contents: Contents;
  trackingParams: string;
  maxAgeStoreSeconds: number;
  background: PurpleBackground;
}

export interface PurpleBackground {
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
  MusicThumbnailCropUnspecified = "MUSIC_THUMBNAIL_CROP_UNSPECIFIED",
}

export enum ThumbnailScale {
  MusicThumbnailScaleAspectFill = "MUSIC_THUMBNAIL_SCALE_ASPECT_FILL",
  MusicThumbnailScaleAspectFit = "MUSIC_THUMBNAIL_SCALE_ASPECT_FIT",
  MusicThumbnailScaleUnspecified = "MUSIC_THUMBNAIL_SCALE_UNSPECIFIED",
}

export interface Contents {
  singleColumnBrowseResultsRenderer: SingleColumnBrowseResultsRenderer;
}

export interface SingleColumnBrowseResultsRenderer {
  tabs: Tab[];
}

export interface Tab {
  tabRenderer: TabRenderer;
}

export interface TabRenderer {
  endpoint: Endpoint;
  title: string;
  selected: boolean;
  content: TabRendererContent;
  icon: Icon;
  tabIdentifier: TabIdentifier;
  trackingParams: string;
}

export interface TabRendererContent {
  sectionListRenderer: SectionListRenderer;
}

export interface SectionListRenderer {
  contents: SectionListRendererContent[];
  continuations: Continuation[];
  trackingParams: string;
  header: SectionListRendererHeader;
}

export interface SectionListRendererContent {
  musicCarouselShelfRenderer?: MusicCarouselShelfRenderer;
  musicTastebuilderShelfRenderer?: MusicTastebuilderShelfRenderer;
}

export interface MusicCarouselShelfRenderer {
  header: MusicCarouselShelfRendererHeader;
  contents: MusicCarouselShelfRendererContent[];
  trackingParams: string;
  itemSize: string;
  numItemsPerColumn?: string;
}

export interface MusicCarouselShelfRendererContent {
  musicResponsiveListItemRenderer?: MusicResponsiveListItemRenderer;
  musicTwoRowItemRenderer?: MusicTwoRowItemRenderer;
}

export interface MusicResponsiveListItemRenderer {
  trackingParams: string;
  thumbnail: PurpleBackground;
  overlay: Overlay;
  flexColumns: FlexColumn[];
  menu: MusicResponsiveListItemRendererMenu;
  playlistItemData: PlaylistItemData;
  flexColumnDisplayStyle: string;
  itemHeight: ItemHeight;
  badges?: Badge[];
}

export interface Badge {
  musicInlineBadgeRenderer: MusicInlineBadgeRenderer;
}

export interface MusicInlineBadgeRenderer {
  trackingParams: string;
  icon: Icon;
  accessibilityData: Accessibility;
}

export interface Accessibility {
  accessibilityData: AccessibilityData;
}

export interface AccessibilityData {
  label: string;
}

export interface Icon {
  iconType: IconType;
}

export enum IconType {
  AddToPlaylist = "ADD_TO_PLAYLIST",
  AddToRemoteQueue = "ADD_TO_REMOTE_QUEUE",
  Album = "ALBUM",
  Artist = "ARTIST",
  LibraryAdd = "LIBRARY_ADD",
  LibrarySaved = "LIBRARY_SAVED",
  Mix = "MIX",
  MusicExplicitBadge = "MUSIC_EXPLICIT_BADGE",
  MusicShuffle = "MUSIC_SHUFFLE",
  Pause = "PAUSE",
  PlayArrow = "PLAY_ARROW",
  QueuePlayNext = "QUEUE_PLAY_NEXT",
  Share = "SHARE",
  TabHome = "TAB_HOME",
  VolumeUp = "VOLUME_UP",
}

export interface FlexColumn {
  musicResponsiveListItemFlexColumnRenderer: MusicResponsiveListItemFlexColumnRenderer;
}

export interface MusicResponsiveListItemFlexColumnRenderer {
  text: Text;
  displayPriority: DisplayPriority;
}

export enum DisplayPriority {
  MusicResponsiveListItemColumnDisplayPriorityHigh = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_HIGH",
  MusicResponsiveListItemColumnDisplayPriorityMedium = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_MEDIUM",
}

export interface Text {
  runs: TextRun[];
}

export interface TextRun {
  text: string;
  navigationEndpoint?: PurpleNavigationEndpoint;
}

export interface PurpleNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint?: NavigationEndpointWatchEndpoint;
  browseEndpoint?: PurpleBrowseEndpoint;
}

export interface PurpleBrowseEndpoint {
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
  MusicPageTypeAlbum = "MUSIC_PAGE_TYPE_ALBUM",
  MusicPageTypeArtist = "MUSIC_PAGE_TYPE_ARTIST",
  MusicPageTypePlaylist = "MUSIC_PAGE_TYPE_PLAYLIST",
}

export interface NavigationEndpointWatchEndpoint {
  videoId: string;
  playlistId: string;
  params: Params;
  loggingContext: LoggingContext;
  watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
}

export interface LoggingContext {
  vssLoggingContext: VssLoggingContext;
}

export interface VssLoggingContext {
  serializedContextData: string;
}

export enum Params {
  WAEB = "wAEB",
}

export interface WatchEndpointMusicSupportedConfigs {
  watchEndpointMusicConfig: WatchEndpointMusicConfig;
}

export interface WatchEndpointMusicConfig {
  musicVideoType: MusicVideoType;
}

export enum MusicVideoType {
  MusicVideoTypeAtv = "MUSIC_VIDEO_TYPE_ATV",
}

export enum ItemHeight {
  MusicResponsiveListItemHeightMediumCompact = "MUSIC_RESPONSIVE_LIST_ITEM_HEIGHT_MEDIUM_COMPACT",
}

export interface MusicResponsiveListItemRendererMenu {
  menuRenderer: PurpleMenuRenderer;
}

export interface PurpleMenuRenderer {
  items: PurpleItem[];
  trackingParams: string;
  topLevelButtons: TopLevelButton[];
  accessibility: Accessibility;
}

export interface PurpleItem {
  menuNavigationItemRenderer?: MenuItemRenderer;
  menuServiceItemRenderer?: MenuItemRenderer;
  toggleMenuServiceItemRenderer?: PurpleToggleMenuServiceItemRenderer;
}

export interface MenuItemRenderer {
  text: PrimaryText;
  icon: Icon;
  navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint;
  trackingParams: string;
  serviceEndpoint?: ServiceEndpoint;
}

export interface MenuNavigationItemRendererNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint?: NavigationEndpointWatchEndpoint;
  modalEndpoint?: ModalEndpoint;
  browseEndpoint?: PurpleBrowseEndpoint;
  shareEntityEndpoint?: ShareEntityEndpoint;
  watchPlaylistEndpoint?: WatchPlaylistEndpoint;
}

export interface ModalEndpoint {
  modal: Modal;
}

export interface Modal {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
}

export interface ModalWithTitleAndButtonRenderer {
  title: PrimaryText;
  content: PrimaryText;
  button: Button;
}

export interface Button {
  buttonRenderer: ButtonButtonRenderer;
}

export interface ButtonButtonRenderer {
  style: StyleEnum;
  isDisabled: boolean;
  text: PrimaryText;
  navigationEndpoint: FluffyNavigationEndpoint;
  trackingParams: string;
}

export interface FluffyNavigationEndpoint {
  clickTrackingParams: string;
  signInEndpoint: SignInEndpoint;
}

export interface SignInEndpoint {
  hack: boolean;
}

export enum StyleEnum {
  StyleBlueText = "STYLE_BLUE_TEXT",
}

export interface PrimaryText {
  runs: PurpleRun[];
}

export interface PurpleRun {
  text: string;
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
  params: string;
}

export interface ServiceEndpoint {
  clickTrackingParams: string;
  queueAddEndpoint: QueueAddEndpoint;
}

export interface QueueAddEndpoint {
  queueTarget: QueueTarget;
  queueInsertPosition: QueueInsertPosition;
  commands: Command[];
}

export interface Command {
  clickTrackingParams: string;
  addToToastAction: AddToToastAction;
}

export interface AddToToastAction {
  item: AddToToastActionItem;
}

export interface AddToToastActionItem {
  notificationTextRenderer: NotificationTextRenderer;
}

export interface NotificationTextRenderer {
  successResponseText: PrimaryText;
  trackingParams: string;
}

export enum QueueInsertPosition {
  InsertAfterCurrentVideo = "INSERT_AFTER_CURRENT_VIDEO",
  InsertAtEnd = "INSERT_AT_END",
}

export interface QueueTarget {
  videoId?: string;
  onEmptyQueue: OnEmptyQueue;
  playlistId?: string;
}

export interface OnEmptyQueue {
  clickTrackingParams: string;
  watchEndpoint: OnEmptyQueueWatchEndpoint;
}

export interface OnEmptyQueueWatchEndpoint {
  videoId?: string;
  playlistId?: string;
}

export interface PurpleToggleMenuServiceItemRenderer {
  defaultText: PrimaryText;
  defaultIcon: Icon;
  defaultServiceEndpoint: DefaultServiceEndpointClass;
  toggledText: PrimaryText;
  toggledIcon: Icon;
  toggledServiceEndpoint: PurpleToggledServiceEndpoint;
  trackingParams: string;
}

export interface DefaultServiceEndpointClass {
  clickTrackingParams: string;
  modalEndpoint: ModalEndpoint;
}

export interface PurpleToggledServiceEndpoint {
  clickTrackingParams: string;
  feedbackEndpoint: FeedbackEndpoint;
}

export interface FeedbackEndpoint {
  feedbackToken: string;
}

export interface TopLevelButton {
  likeButtonRenderer: LikeButtonRenderer;
}

export interface LikeButtonRenderer {
  target: PlaylistItemData;
  likeStatus: Status;
  trackingParams: string;
  likesAllowed: boolean;
  dislikeNavigationEndpoint: DefaultServiceEndpointClass;
  likeCommand: DefaultServiceEndpointClass;
}

export enum Status {
  Indifferent = "INDIFFERENT",
}

export interface PlaylistItemData {
  videoId: string;
}

export interface Overlay {
  musicItemThumbnailOverlayRenderer: OverlayMusicItemThumbnailOverlayRenderer;
}

export interface OverlayMusicItemThumbnailOverlayRenderer {
  background: BackgroundClass;
  content: PurpleContent;
  contentPosition: PurpleContentPosition;
  displayStyle: PurpleDisplayStyle;
}

export interface BackgroundClass {
  verticalGradient: VerticalGradient;
}

export interface VerticalGradient {
  gradientLayerColors: string[];
}

export interface PurpleContent {
  musicPlayButtonRenderer: PurpleMusicPlayButtonRenderer;
}

export interface PurpleMusicPlayButtonRenderer {
  playNavigationEndpoint: PlayNavigationEndpoint;
  trackingParams: string;
  playIcon: Icon;
  pauseIcon: Icon;
  iconColor: number;
  backgroundColor: number;
  activeBackgroundColor: number;
  loadingIndicatorColor: number;
  playingIcon: Icon;
  iconLoadingColor: number;
  activeScaleFactor: number;
  buttonSize: PurpleButtonSize;
  rippleTarget: RippleTarget;
  accessibilityPlayData: Accessibility;
  accessibilityPauseData: Accessibility;
}

export enum PurpleButtonSize {
  MusicPlayButtonSizeSmall = "MUSIC_PLAY_BUTTON_SIZE_SMALL",
}

export interface PlayNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint: NavigationEndpointWatchEndpoint;
}

export enum RippleTarget {
  MusicPlayButtonRippleTargetSelf = "MUSIC_PLAY_BUTTON_RIPPLE_TARGET_SELF",
}

export enum PurpleContentPosition {
  MusicItemThumbnailOverlayContentPositionCentered = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_CENTERED",
}

export enum PurpleDisplayStyle {
  MusicItemThumbnailOverlayDisplayStylePersistent = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_PERSISTENT",
}

export interface MusicTwoRowItemRenderer {
  thumbnailRenderer: PurpleBackground;
  aspectRatio: AspectRatio;
  title: Title;
  subtitle: PrimaryText;
  navigationEndpoint: MusicTwoRowItemRendererNavigationEndpoint;
  trackingParams: string;
  menu: MusicTwoRowItemRendererMenu;
  thumbnailOverlay: ThumbnailOverlay;
}

export enum AspectRatio {
  MusicTwoRowItemThumbnailAspectRatioSquare = "MUSIC_TWO_ROW_ITEM_THUMBNAIL_ASPECT_RATIO_SQUARE",
}

export interface MusicTwoRowItemRendererMenu {
  menuRenderer: FluffyMenuRenderer;
}

export interface FluffyMenuRenderer {
  items: FluffyItem[];
  trackingParams: string;
  accessibility: Accessibility;
}

export interface FluffyItem {
  menuNavigationItemRenderer?: MenuItemRenderer;
  menuServiceItemRenderer?: MenuItemRenderer;
  toggleMenuServiceItemRenderer?: FluffyToggleMenuServiceItemRenderer;
}

export interface FluffyToggleMenuServiceItemRenderer {
  defaultText: PrimaryText;
  defaultIcon: Icon;
  defaultServiceEndpoint: DefaultServiceEndpointClass;
  toggledText: PrimaryText;
  toggledIcon: Icon;
  toggledServiceEndpoint: FluffyToggledServiceEndpoint;
  trackingParams: string;
}

export interface FluffyToggledServiceEndpoint {
  clickTrackingParams: string;
  likeEndpoint: LikeEndpoint;
}

export interface LikeEndpoint {
  status: Status;
  target: Target;
}

export interface Target {
  playlistId: string;
}

export interface MusicTwoRowItemRendererNavigationEndpoint {
  clickTrackingParams: string;
  browseEndpoint: PurpleBrowseEndpoint;
}

export interface ThumbnailOverlay {
  musicItemThumbnailOverlayRenderer: ThumbnailOverlayMusicItemThumbnailOverlayRenderer;
}

export interface ThumbnailOverlayMusicItemThumbnailOverlayRenderer {
  background: BackgroundClass;
  content: FluffyContent;
  contentPosition: FluffyContentPosition;
  displayStyle: FluffyDisplayStyle;
}

export interface FluffyContent {
  musicPlayButtonRenderer: FluffyMusicPlayButtonRenderer;
}

export interface FluffyMusicPlayButtonRenderer {
  playNavigationEndpoint: PlayNavigationEndpointClass;
  trackingParams: string;
  playIcon: Icon;
  pauseIcon: Icon;
  iconColor: number;
  backgroundColor: number;
  activeBackgroundColor: number;
  loadingIndicatorColor: number;
  playingIcon: Icon;
  iconLoadingColor: number;
  activeScaleFactor: number;
  buttonSize: FluffyButtonSize;
  rippleTarget: RippleTarget;
  accessibilityPlayData: Accessibility;
  accessibilityPauseData: Accessibility;
}

export enum FluffyButtonSize {
  MusicPlayButtonSizeMedium = "MUSIC_PLAY_BUTTON_SIZE_MEDIUM",
}

export interface PlayNavigationEndpointClass {
  clickTrackingParams: string;
  watchPlaylistEndpoint: WatchPlaylistEndpoint;
}

export enum FluffyContentPosition {
  MusicItemThumbnailOverlayContentPositionBottomRight = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_BOTTOM_RIGHT",
}

export enum FluffyDisplayStyle {
  MusicItemThumbnailOverlayDisplayStyleHover = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_HOVER",
}

export interface Title {
  runs: TitleRun[];
}

export interface TitleRun {
  text: string;
  navigationEndpoint: MusicTwoRowItemRendererNavigationEndpoint;
}

export interface MusicCarouselShelfRendererHeader {
  musicCarouselShelfBasicHeaderRenderer: MusicCarouselShelfBasicHeaderRenderer;
}

export interface MusicCarouselShelfBasicHeaderRenderer {
  title: PrimaryText;
  strapline: PrimaryText;
  accessibilityData: Accessibility;
  headerStyle: string;
  moreContentButton?: MoreContentButton;
  trackingParams: string;
}

export interface MoreContentButton {
  buttonRenderer: MoreContentButtonButtonRenderer;
}

export interface MoreContentButtonButtonRenderer {
  style: string;
  text: PrimaryText;
  navigationEndpoint: PlayNavigationEndpointClass;
  trackingParams: string;
  accessibilityData: Accessibility;
}

export interface MusicTastebuilderShelfRenderer {
  thumbnail: MusicTastebuilderShelfRendererThumbnail;
  primaryText: PrimaryText;
  secondaryText: PrimaryText;
  actionButton: ActionButton;
  isVisible: boolean;
  trackingParams: string;
}

export interface ActionButton {
  buttonRenderer: ActionButtonButtonRenderer;
}

export interface ActionButtonButtonRenderer {
  style: string;
  text: PrimaryText;
  navigationEndpoint: DefaultServiceEndpointClass;
  trackingParams: string;
}

export interface MusicTastebuilderShelfRendererThumbnail {
  musicTastebuilderShelfThumbnailRenderer: MusicTastebuilderShelfThumbnailRenderer;
}

export interface MusicTastebuilderShelfThumbnailRenderer {
  thumbnail: MusicThumbnailRendererThumbnail;
}

export interface Continuation {
  nextContinuationData: NextContinuationData;
}

export interface NextContinuationData {
  continuation: string;
  clickTrackingParams: string;
}

export interface SectionListRendererHeader {
  chipCloudRenderer: ChipCloudRenderer;
}

export interface ChipCloudRenderer {
  chips: Chip[];
  trackingParams: string;
  horizontalScrollable: boolean;
}

export interface Chip {
  chipCloudChipRenderer: ChipCloudChipRenderer;
}

export interface ChipCloudChipRenderer {
  style: StyleClass;
  text: PrimaryText;
  navigationEndpoint: OnDeselectedCommandClass;
  trackingParams: string;
  isSelected: boolean;
  onDeselectedCommand: OnDeselectedCommandClass;
  targetId?: string;
}

export interface OnDeselectedCommandClass {
  clickTrackingParams: string;
  browseEndpoint: OnDeselectedCommandBrowseEndpoint;
}

export interface OnDeselectedCommandBrowseEndpoint {
  browseId: TabIdentifier;
  params: string;
}

export enum TabIdentifier {
  FEmusicHome = "FEmusic_home",
}

export interface StyleClass {
  styleType: StyleType;
}

export enum StyleType {
  StyleLargeTranslucentAndSelectedWhite = "STYLE_LARGE_TRANSLUCENT_AND_SELECTED_WHITE",
}

export interface Endpoint {
  clickTrackingParams: string;
  browseEndpoint: EndpointBrowseEndpoint;
}

export interface EndpointBrowseEndpoint {
  browseId: TabIdentifier;
}

export interface ResponseContext {
  visitorData: string;
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
