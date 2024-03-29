// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface AR {
  responseContext: ResponseContext;
  contents: Contents;
  header: Header;
  trackingParams: string;
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
  content: TabRendererContent;
  trackingParams: string;
}

export interface TabRendererContent {
  sectionListRenderer: SectionListRenderer;
}

export interface SectionListRenderer {
  contents: SectionListRendererContent[];
  trackingParams: string;
}

export interface SectionListRendererContent {
  musicShelfRenderer?: MusicShelfRenderer;
  musicCarouselShelfRenderer?: MusicCarouselShelfRenderer;
  musicDescriptionShelfRenderer?: MusicDescriptionShelfRenderer;
}

export interface MusicCarouselShelfRenderer {
  header: MusicCarouselShelfRendererHeader;
  contents: MusicCarouselShelfRendererContent[];
  trackingParams: string;
  itemSize: string;
}

export interface MusicCarouselShelfRendererContent {
  musicTwoRowItemRenderer: MusicTwoRowItemRenderer;
}

export interface MusicTwoRowItemRenderer {
  thumbnailRenderer: ThumbnailRendererClass;
  aspectRatio: AspectRatio;
  title: Title;
  subtitle: Subtitle;
  navigationEndpoint: MusicTwoRowItemRendererNavigationEndpoint;
  trackingParams: string;
  menu: MusicTwoRowItemRendererMenu;
  thumbnailOverlay?: ThumbnailOverlay;
}

export enum AspectRatio {
  MusicTwoRowItemThumbnailAspectRatioRectangle16_9 = "MUSIC_TWO_ROW_ITEM_THUMBNAIL_ASPECT_RATIO_RECTANGLE_16_9",
  MusicTwoRowItemThumbnailAspectRatioSquare = "MUSIC_TWO_ROW_ITEM_THUMBNAIL_ASPECT_RATIO_SQUARE",
}

export interface MusicTwoRowItemRendererMenu {
  menuRenderer: PurpleMenuRenderer;
}

export interface PurpleMenuRenderer {
  items: PurpleItem[];
  trackingParams: string;
  accessibility: SubscribeAccessibilityClass;
}

export interface SubscribeAccessibilityClass {
  accessibilityData: PurpleAccessibility;
}

export interface PurpleAccessibility {
  label: string;
}

export interface PurpleItem {
  menuNavigationItemRenderer?: MenuItemRenderer;
  menuServiceItemRenderer?: MenuItemRenderer;
  toggleMenuServiceItemRenderer?: ToggleMenuServiceItemRenderer;
}

export interface MenuItemRenderer {
  text: Description;
  icon: Icon;
  navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint;
  trackingParams: string;
  serviceEndpoint?: MenuNavigationItemRendererServiceEndpoint;
}

export interface Icon {
  iconType: IconType;
}

export enum IconType {
  AddToPlaylist = "ADD_TO_PLAYLIST",
  AddToRemoteQueue = "ADD_TO_REMOTE_QUEUE",
  Album = "ALBUM",
  Collapse = "COLLAPSE",
  Expand = "EXPAND",
  Favorite = "FAVORITE",
  LibraryAdd = "LIBRARY_ADD",
  LibrarySaved = "LIBRARY_SAVED",
  Mix = "MIX",
  MusicShuffle = "MUSIC_SHUFFLE",
  Pause = "PAUSE",
  PlayArrow = "PLAY_ARROW",
  QueuePlayNext = "QUEUE_PLAY_NEXT",
  Share = "SHARE",
  Subscribe = "SUBSCRIBE",
  Unfavorite = "UNFAVORITE",
  VolumeUp = "VOLUME_UP",
}

export interface MenuNavigationItemRendererNavigationEndpoint {
  clickTrackingParams: string;
  watchPlaylistEndpoint?: WatchPlaylistEndpoint;
  modalEndpoint?: ModalEndpoint;
  shareEntityEndpoint?: ShareEntityEndpoint;
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
  MusicPageTypeArtistDiscography = "MUSIC_PAGE_TYPE_ARTIST_DISCOGRAPHY",
  MusicPageTypePlaylist = "MUSIC_PAGE_TYPE_PLAYLIST",
}

export interface ModalEndpoint {
  modal: Modal;
}

export interface Modal {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
}

export interface ModalWithTitleAndButtonRenderer {
  title: Description;
  content: Description;
  button: Button;
}

export interface Button {
  buttonRenderer: ButtonButtonRenderer;
}

export interface ButtonButtonRenderer {
  style: Style;
  isDisabled: boolean;
  text: Description;
  navigationEndpoint: PurpleNavigationEndpoint;
  trackingParams: string;
}

export interface PurpleNavigationEndpoint {
  clickTrackingParams: string;
  signInEndpoint: SignInEndpoint;
}

export interface SignInEndpoint {
  hack: boolean;
}

export enum Style {
  StyleBlueText = "STYLE_BLUE_TEXT",
}

export interface Description {
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

export interface NavigationEndpointWatchEndpoint {
  videoId: string;
  playlistId: string;
  params?: Params;
  loggingContext: LoggingContext;
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs;
  index?: number;
}

export interface LoggingContext {
  vssLoggingContext: VssLoggingContext;
}

export interface VssLoggingContext {
  serializedContextData: string;
}

export enum Params {
  WAEB = "wAEB",
  WAEB8GECGAE3D = "wAEB8gECGAE%3D",
  WAEB8GECKAE3D = "wAEB8gECKAE%3D",
}

export interface WatchEndpointMusicSupportedConfigs {
  watchEndpointMusicConfig: WatchEndpointMusicConfig;
}

export interface WatchEndpointMusicConfig {
  musicVideoType: MusicVideoType;
}

export enum MusicVideoType {
  MusicVideoTypeAtv = "MUSIC_VIDEO_TYPE_ATV",
  MusicVideoTypeOmv = "MUSIC_VIDEO_TYPE_OMV",
}

export interface WatchPlaylistEndpoint {
  playlistId: string;
  params?: Params;
}

export interface MenuNavigationItemRendererServiceEndpoint {
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
  successResponseText: Description;
  trackingParams: string;
}

export enum QueueInsertPosition {
  InsertAfterCurrentVideo = "INSERT_AFTER_CURRENT_VIDEO",
  InsertAtEnd = "INSERT_AT_END",
}

export interface QueueTarget {
  playlistId?: string;
  onEmptyQueue: OnEmptyQueue;
  videoId?: string;
}

export interface OnEmptyQueue {
  clickTrackingParams: string;
  watchEndpoint: OnEmptyQueueWatchEndpoint;
}

export interface OnEmptyQueueWatchEndpoint {
  playlistId?: string;
  videoId?: string;
}

export interface ToggleMenuServiceItemRenderer {
  defaultText: Description;
  defaultIcon: Icon;
  defaultServiceEndpoint: DefaultServiceEndpointClass;
  toggledText: Description;
  toggledIcon: Icon;
  toggledServiceEndpoint?: ToggledServiceEndpoint;
  trackingParams: string;
}

export interface DefaultServiceEndpointClass {
  clickTrackingParams: string;
  modalEndpoint: ModalEndpoint;
}

export interface ToggledServiceEndpoint {
  clickTrackingParams: string;
  likeEndpoint: LikeEndpoint;
}

export interface LikeEndpoint {
  status: Status;
  target: Target;
}

export enum Status {
  Indifferent = "INDIFFERENT",
}

export interface Target {
  playlistId: string;
}

export interface MusicTwoRowItemRendererNavigationEndpoint {
  clickTrackingParams: string;
  browseEndpoint?: BottomEndpointBrowseEndpoint;
  watchEndpoint?: NavigationEndpointWatchEndpoint;
}

export interface BottomEndpointBrowseEndpoint {
  browseId: string;
  params?: string;
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs;
}

export interface Subtitle {
  runs: SubtitleRun[];
}

export interface SubtitleRun {
  text: string;
  navigationEndpoint?: FluffyNavigationEndpoint;
}

export interface FluffyNavigationEndpoint {
  clickTrackingParams: string;
  browseEndpoint: PurpleBrowseEndpoint;
}

export interface ThumbnailOverlay {
  musicItemThumbnailOverlayRenderer: ThumbnailOverlayMusicItemThumbnailOverlayRenderer;
}

export interface ThumbnailOverlayMusicItemThumbnailOverlayRenderer {
  background: Background;
  content: PurpleContent;
  contentPosition: ContentPosition;
  displayStyle: DisplayStyle;
}

export interface Background {
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
  buttonSize: ButtonSize;
  rippleTarget: RippleTarget;
  accessibilityPlayData: SubscribeAccessibilityClass;
  accessibilityPauseData: SubscribeAccessibilityClass;
}

export enum ButtonSize {
  MusicPlayButtonSizeHuge = "MUSIC_PLAY_BUTTON_SIZE_HUGE",
  MusicPlayButtonSizeMedium = "MUSIC_PLAY_BUTTON_SIZE_MEDIUM",
}

export interface PlayNavigationEndpoint {
  clickTrackingParams: string;
  watchPlaylistEndpoint?: WatchPlaylistEndpoint;
  watchEndpoint?: NavigationEndpointWatchEndpoint;
}

export enum RippleTarget {
  MusicPlayButtonRippleTargetAncestor = "MUSIC_PLAY_BUTTON_RIPPLE_TARGET_ANCESTOR",
  MusicPlayButtonRippleTargetSelf = "MUSIC_PLAY_BUTTON_RIPPLE_TARGET_SELF",
}

export enum ContentPosition {
  MusicItemThumbnailOverlayContentPositionBottomRight = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_BOTTOM_RIGHT",
  MusicItemThumbnailOverlayContentPositionCentered = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_CENTERED",
}

export enum DisplayStyle {
  MusicItemThumbnailOverlayDisplayStyleHover = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_HOVER",
  MusicItemThumbnailOverlayDisplayStylePersistent = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_PERSISTENT",
}

export interface ThumbnailRendererClass {
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
  MusicThumbnailCropUnspecified = "MUSIC_THUMBNAIL_CROP_UNSPECIFIED",
}

export enum ThumbnailScale {
  MusicThumbnailScaleAspectFill = "MUSIC_THUMBNAIL_SCALE_ASPECT_FILL",
  MusicThumbnailScaleAspectFit = "MUSIC_THUMBNAIL_SCALE_ASPECT_FIT",
}

export interface Title {
  runs: TitleRun[];
}

export interface TitleRun {
  text: string;
  navigationEndpoint?: Endpoint;
}

export interface Endpoint {
  clickTrackingParams: string;
  browseEndpoint: BottomEndpointBrowseEndpoint;
}

export interface MusicCarouselShelfRendererHeader {
  musicCarouselShelfBasicHeaderRenderer: MusicCarouselShelfBasicHeaderRenderer;
}

export interface MusicCarouselShelfBasicHeaderRenderer {
  title: Title;
  accessibilityData: SubscribeAccessibilityClass;
  headerStyle: string;
  moreContentButton?: MoreContentButton;
  trackingParams: string;
}

export interface MoreContentButton {
  buttonRenderer: MoreContentButtonButtonRenderer;
}

export interface MoreContentButtonButtonRenderer {
  style: string;
  text: Description;
  navigationEndpoint: Endpoint;
  trackingParams: string;
  accessibilityData: SubscribeAccessibilityClass;
}

export interface MusicDescriptionShelfRenderer {
  header: Description;
  subheader: Description;
  description: Description;
  moreButton: MoreButton;
  trackingParams: string;
}

export interface MoreButton {
  toggleButtonRenderer: ToggleButtonRenderer;
}

export interface ToggleButtonRenderer {
  isToggled: boolean;
  isDisabled: boolean;
  defaultIcon: Icon;
  defaultText: Description;
  toggledIcon: Icon;
  toggledText: Description;
  trackingParams: string;
}

export interface MusicShelfRenderer {
  title: Title;
  contents: MusicShelfRendererContent[];
  trackingParams: string;
  bottomText: Description;
  bottomEndpoint: Endpoint;
  shelfDivider: ShelfDivider;
}

export interface MusicShelfRendererContent {
  musicResponsiveListItemRenderer: MusicResponsiveListItemRenderer;
}

export interface MusicResponsiveListItemRenderer {
  trackingParams: string;
  thumbnail: ThumbnailRendererClass;
  overlay: Overlay;
  flexColumns: FlexColumn[];
  menu: MusicResponsiveListItemRendererMenu;
  playlistItemData: PlaylistItemData;
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
  navigationEndpoint?: TentacledNavigationEndpoint;
}

export interface TentacledNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint?: NavigationEndpointWatchEndpoint;
  browseEndpoint?: PurpleBrowseEndpoint;
}

export interface MusicResponsiveListItemRendererMenu {
  menuRenderer: FluffyMenuRenderer;
}

export interface FluffyMenuRenderer {
  items: FluffyItem[];
  trackingParams: string;
  topLevelButtons: TopLevelButton[];
  accessibility: SubscribeAccessibilityClass;
}

export interface FluffyItem {
  menuNavigationItemRenderer?: MenuItemRenderer;
  menuServiceItemRenderer?: MenuItemRenderer;
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

export interface PlaylistItemData {
  videoId: string;
}

export interface Overlay {
  musicItemThumbnailOverlayRenderer: OverlayMusicItemThumbnailOverlayRenderer;
}

export interface OverlayMusicItemThumbnailOverlayRenderer {
  background: Background;
  content: FluffyContent;
  contentPosition: ContentPosition;
  displayStyle: DisplayStyle;
}

export interface FluffyContent {
  musicPlayButtonRenderer: FluffyMusicPlayButtonRenderer;
}

export interface FluffyMusicPlayButtonRenderer {
  playNavigationEndpoint: NavigationEndpoint;
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
  buttonSize: string;
  rippleTarget: RippleTarget;
  accessibilityPlayData: SubscribeAccessibilityClass;
  accessibilityPauseData: SubscribeAccessibilityClass;
}

export interface NavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint: NavigationEndpointWatchEndpoint;
}

export interface ShelfDivider {
  musicShelfDividerRenderer: MusicShelfDividerRenderer;
}

export interface MusicShelfDividerRenderer {
  hidden: boolean;
}

export interface Header {
  musicImmersiveHeaderRenderer: MusicImmersiveHeaderRenderer;
}

export interface MusicImmersiveHeaderRenderer {
  title: Description;
  subscriptionButton: SubscriptionButton;
  description: Description;
  moreButton: MoreButton;
  menu: MusicImmersiveHeaderRendererMenu;
  thumbnail: ThumbnailRendererClass;
  trackingParams: string;
  playButton: PlayButton;
  startRadioButton: StartRadioButton;
  shareEndpoint: ShareEndpoint;
}

export interface MusicImmersiveHeaderRendererMenu {
  menuRenderer: TentacledMenuRenderer;
}

export interface TentacledMenuRenderer {
  items: TentacledItem[];
  trackingParams: string;
  accessibility: SubscribeAccessibilityClass;
}

export interface TentacledItem {
  menuNavigationItemRenderer: MenuItemRenderer;
}

export interface PlayButton {
  buttonRenderer: PlayButtonButtonRenderer;
}

export interface PlayButtonButtonRenderer {
  style: string;
  size: string;
  text: Description;
  icon: Icon;
  navigationEndpoint: NavigationEndpoint;
  accessibility: PurpleAccessibility;
  trackingParams: string;
  accessibilityData: SubscribeAccessibilityClass;
}

export interface ShareEndpoint {
  clickTrackingParams: string;
  shareEntityEndpoint: ShareEntityEndpoint;
}

export interface StartRadioButton {
  buttonRenderer: StartRadioButtonButtonRenderer;
}

export interface StartRadioButtonButtonRenderer {
  text: Description;
  icon: Icon;
  navigationEndpoint: NavigationEndpoint;
  accessibility: PurpleAccessibility;
  trackingParams: string;
}

export interface SubscriptionButton {
  subscribeButtonRenderer: SubscribeButtonRenderer;
}

export interface SubscribeButtonRenderer {
  subscriberCountText: Description;
  subscribed: boolean;
  enabled: boolean;
  type: string;
  channelId: string;
  showPreferences: boolean;
  subscriberCountWithSubscribeText: Description;
  subscribedButtonText: Description;
  unsubscribedButtonText: Description;
  trackingParams: string;
  unsubscribeButtonText: Description;
  serviceEndpoints: ServiceEndpointElement[];
  longSubscriberCountText: LongSubscriberCountText;
  shortSubscriberCountText: Description;
  subscribeAccessibility: SubscribeAccessibilityClass;
  unsubscribeAccessibility: SubscribeAccessibilityClass;
  signInEndpoint: DefaultServiceEndpointClass;
}

export interface LongSubscriberCountText {
  runs: PurpleRun[];
  accessibility: SubscribeAccessibilityClass;
}

export interface ServiceEndpointElement {
  clickTrackingParams: string;
  subscribeEndpoint?: SubscribeEndpoint;
  signalServiceEndpoint?: SignalServiceEndpoint;
}

export interface SignalServiceEndpoint {
  signal: string;
  actions: Action[];
}

export interface Action {
  clickTrackingParams: string;
  openPopupAction: OpenPopupAction;
}

export interface OpenPopupAction {
  popup: Popup;
  popupType: string;
}

export interface Popup {
  confirmDialogRenderer: ConfirmDialogRenderer;
}

export interface ConfirmDialogRenderer {
  trackingParams: string;
  dialogMessages: Description[];
  confirmButton: CancelButtonClass;
  cancelButton: CancelButtonClass;
}

export interface CancelButtonClass {
  buttonRenderer: CancelButtonButtonRenderer;
}

export interface CancelButtonButtonRenderer {
  style: string;
  size: string;
  text: Description;
  trackingParams: string;
  serviceEndpoint?: ButtonRendererServiceEndpoint;
}

export interface ButtonRendererServiceEndpoint {
  clickTrackingParams: string;
  unsubscribeEndpoint: UnsubscribeEndpoint;
}

export interface UnsubscribeEndpoint {
  channelIds: string[];
}

export interface SubscribeEndpoint {
  channelIds: string[];
  params: string;
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
