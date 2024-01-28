export interface Playlist {
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
  continuations: Continuation[];
  trackingParams: string;
}

export interface SectionListRendererContent {
  musicPlaylistShelfRenderer: MusicPlaylistShelfRenderer;
}

export interface MusicPlaylistShelfRenderer {
  playlistId: string;
  contents: MusicPlaylistShelfRendererContent[];
  collapsedItemCount: number;
  trackingParams: string;
  contentsMultiSelectable: boolean;
}

export interface MusicPlaylistShelfRendererContent {
  musicResponsiveListItemRenderer: MusicResponsiveListItemRenderer;
}

export interface MusicResponsiveListItemRenderer {
  trackingParams: string;
  thumbnail: MusicResponsiveListItemRendererThumbnail;
  overlay: Overlay;
  flexColumns: FlexColumn[];
  fixedColumns: FixedColumn[];
  menu: MusicResponsiveListItemRendererMenu;
  playlistItemData: PlaylistItemData;
  multiSelectCheckbox: MultiSelectCheckbox;
}

export interface FixedColumn {
  musicResponsiveListItemFixedColumnRenderer: MusicResponsiveListItemFixedColumnRenderer;
}

export interface MusicResponsiveListItemFixedColumnRenderer {
  text: Description;
  displayPriority: DisplayPriority;
  size: Size;
}

export enum DisplayPriority {
  MusicResponsiveListItemColumnDisplayPriorityHigh = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_HIGH",
  MusicResponsiveListItemColumnDisplayPriorityMedium = "MUSIC_RESPONSIVE_LIST_ITEM_COLUMN_DISPLAY_PRIORITY_MEDIUM",
}

export enum Size {
  MusicResponsiveListItemFixedColumnSizeSmall = "MUSIC_RESPONSIVE_LIST_ITEM_FIXED_COLUMN_SIZE_SMALL",
}

export interface Description {
  runs: DescriptionRun[];
}

export interface DescriptionRun {
  text: string;
}

export interface FlexColumn {
  musicResponsiveListItemFlexColumnRenderer: MusicResponsiveListItemFlexColumnRenderer;
}

export interface MusicResponsiveListItemFlexColumnRenderer {
  text: Text;
  displayPriority: DisplayPriority;
}

export interface Text {
  runs?: PurpleRun[];
}

export interface PurpleRun {
  text: string;
  navigationEndpoint?: PurpleNavigationEndpoint;
}

export interface PurpleNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint?: NavigationEndpointWatchEndpoint;
  browseEndpoint?: BrowseEndpoint;
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
  MusicPageTypeUserChannel = "MUSIC_PAGE_TYPE_USER_CHANNEL",
}

export interface NavigationEndpointWatchEndpoint {
  videoId: string;
  playlistId: string;
  playerParams?: PlayerParams;
  loggingContext: LoggingContext;
  watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs;
  params?: Params;
  playlistSetVideoId?: string;
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

export enum PlayerParams {
  IAQB8AUB = "iAQB8AUB",
}

export interface WatchEndpointMusicSupportedConfigs {
  watchEndpointMusicConfig: WatchEndpointMusicConfig;
}

export interface WatchEndpointMusicConfig {
  musicVideoType: MusicVideoType;
}

export enum MusicVideoType {
  MusicVideoTypeOmv = "MUSIC_VIDEO_TYPE_OMV",
}

export interface MusicResponsiveListItemRendererMenu {
  menuRenderer: PurpleMenuRenderer;
}

export interface PurpleMenuRenderer {
  items: ItemElement[];
  trackingParams: string;
  topLevelButtons: PurpleTopLevelButton[];
  accessibility: AccessibilityPauseDataClass;
}

export interface AccessibilityPauseDataClass {
  accessibilityData: PurpleAccessibility;
}

export interface PurpleAccessibility {
  label: string;
}

export interface ItemElement {
  menuNavigationItemRenderer?: MenuItemRenderer;
  menuServiceItemRenderer?: MenuItemRenderer;
}

export interface MenuItemRenderer {
  text: Description;
  icon: Icon;
  navigationEndpoint?: MenuNavigationItemRendererNavigationEndpoint;
  trackingParams: string;
  serviceEndpoint?: ServiceEndpoint;
}

export interface Icon {
  iconType: IconType;
}

export enum IconType {
  AddToPlaylist = "ADD_TO_PLAYLIST",
  AddToRemoteQueue = "ADD_TO_REMOTE_QUEUE",
  Artist = "ARTIST",
  Collapse = "COLLAPSE",
  Expand = "EXPAND",
  LibraryAdd = "LIBRARY_ADD",
  LibrarySaved = "LIBRARY_SAVED",
  Mix = "MIX",
  MusicShuffle = "MUSIC_SHUFFLE",
  Pause = "PAUSE",
  PlayArrow = "PLAY_ARROW",
  QueuePlayNext = "QUEUE_PLAY_NEXT",
  Share = "SHARE",
  VolumeUp = "VOLUME_UP",
}

export interface MenuNavigationItemRendererNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint?: NavigationEndpointWatchEndpoint;
  modalEndpoint?: ModalEndpoint;
  browseEndpoint?: BrowseEndpoint;
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

export enum Style {
  StyleBlueText = "STYLE_BLUE_TEXT",
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
  successResponseText: Description;
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

export interface PurpleTopLevelButton {
  likeButtonRenderer: LikeButtonRenderer;
}

export interface LikeButtonRenderer {
  target: Target;
  likeStatus: LikeStatus;
  trackingParams: string;
  likesAllowed: boolean;
  dislikeNavigationEndpoint: DefaultNavigationEndpoint;
  likeCommand: DefaultNavigationEndpoint;
}

export interface DefaultNavigationEndpoint {
  clickTrackingParams: string;
  modalEndpoint: ModalEndpoint;
}

export enum LikeStatus {
  Indifferent = "INDIFFERENT",
}

export interface Target {
  videoId: string;
}

export interface MultiSelectCheckbox {
  checkboxRenderer: CheckboxRenderer;
}

export interface CheckboxRenderer {
  onSelectionChangeCommand: OnSelectionChangeCommand;
  checkedState: CheckedState;
  trackingParams: string;
}

export enum CheckedState {
  CheckboxCheckedStateUnchecked = "CHECKBOX_CHECKED_STATE_UNCHECKED",
}

export interface OnSelectionChangeCommand {
  clickTrackingParams: string;
  updateMultiSelectStateCommand: UpdateMultiSelectStateCommand;
}

export interface UpdateMultiSelectStateCommand {
  multiSelectParams: MultiSelectParams;
  multiSelectItem: string;
}

export enum MultiSelectParams {
  CAISILBMRElvVU9OUVFQbFd2DHhkZVZURzNPNy1TBFNOMGpmV2O = "CAISIlBMRElvVU9oUVFQbFd2dHhkZVZURzNpNy1TbFNOMGpmV2o=",
}

export interface Overlay {
  musicItemThumbnailOverlayRenderer: MusicItemThumbnailOverlayRenderer;
}

export interface MusicItemThumbnailOverlayRenderer {
  background: Background;
  content: MusicItemThumbnailOverlayRendererContent;
  contentPosition: ContentPosition;
  displayStyle: DisplayStyle;
}

export interface Background {
  verticalGradient: VerticalGradient;
}

export interface VerticalGradient {
  gradientLayerColors: string[];
}

export interface MusicItemThumbnailOverlayRendererContent {
  musicPlayButtonRenderer: MusicPlayButtonRenderer;
}

export interface MusicPlayButtonRenderer {
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
  accessibilityPlayData: AccessibilityPauseDataClass;
  accessibilityPauseData: AccessibilityPauseDataClass;
}

export enum ButtonSize {
  MusicPlayButtonSizeSmall = "MUSIC_PLAY_BUTTON_SIZE_SMALL",
}

export interface PlayNavigationEndpoint {
  clickTrackingParams: string;
  watchEndpoint: NavigationEndpointWatchEndpoint;
}

export enum RippleTarget {
  MusicPlayButtonRippleTargetSelf = "MUSIC_PLAY_BUTTON_RIPPLE_TARGET_SELF",
}

export enum ContentPosition {
  MusicItemThumbnailOverlayContentPositionCentered = "MUSIC_ITEM_THUMBNAIL_OVERLAY_CONTENT_POSITION_CENTERED",
}

export enum DisplayStyle {
  MusicItemThumbnailOverlayDisplayStylePersistent = "MUSIC_ITEM_THUMBNAIL_OVERLAY_DISPLAY_STYLE_PERSISTENT",
}

export interface PlaylistItemData {
  playlistSetVideoId: string;
  videoId: string;
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
  MusicThumbnailCropUnspecified = "MUSIC_THUMBNAIL_CROP_UNSPECIFIED",
}

export enum ThumbnailScale {
  MusicThumbnailScaleAspectFit = "MUSIC_THUMBNAIL_SCALE_ASPECT_FIT",
}

export interface Continuation {
  nextContinuationData: NextContinuationData;
}

export interface NextContinuationData {
  continuation: string;
  clickTrackingParams: string;
}

export interface Header {
  musicDetailHeaderRenderer: MusicDetailHeaderRenderer;
}

export interface MusicDetailHeaderRenderer {
  title: Description;
  subtitle: Subtitle;
  menu: MusicDetailHeaderRendererMenu;
  thumbnail: MusicDetailHeaderRendererThumbnail;
  trackingParams: string;
  description: Description;
  moreButton: MoreButton;
  secondSubtitle: Description;
}

export interface MusicDetailHeaderRendererMenu {
  menuRenderer: FluffyMenuRenderer;
}

export interface FluffyMenuRenderer {
  items: ItemElement[];
  trackingParams: string;
  topLevelButtons: FluffyTopLevelButton[];
  accessibility: AccessibilityPauseDataClass;
}

export interface FluffyTopLevelButton {
  buttonRenderer?: TopLevelButtonButtonRenderer;
  toggleButtonRenderer?: TopLevelButtonToggleButtonRenderer;
}

export interface TopLevelButtonButtonRenderer {
  style: string;
  size: string;
  text: Description;
  icon: Icon;
  navigationEndpoint: TentacledNavigationEndpoint;
  accessibility: PurpleAccessibility;
  trackingParams: string;
  accessibilityData: AccessibilityPauseDataClass;
}

export interface TentacledNavigationEndpoint {
  clickTrackingParams: string;
  watchPlaylistEndpoint: WatchPlaylistEndpoint;
}

export interface TopLevelButtonToggleButtonRenderer {
  isToggled: boolean;
  isDisabled: boolean;
  defaultIcon: Icon;
  defaultText: DefaultTextClass;
  toggledIcon: Icon;
  toggledText: DefaultTextClass;
  trackingParams: string;
  defaultNavigationEndpoint: DefaultNavigationEndpoint;
}

export interface DefaultTextClass {
  runs: DescriptionRun[];
  accessibility: AccessibilityPauseDataClass;
}

export interface MoreButton {
  toggleButtonRenderer: MoreButtonToggleButtonRenderer;
}

export interface MoreButtonToggleButtonRenderer {
  isToggled: boolean;
  isDisabled: boolean;
  defaultIcon: Icon;
  defaultText: Description;
  toggledIcon: Icon;
  toggledText: Description;
  trackingParams: string;
}

export interface Subtitle {
  runs: SubtitleRun[];
}

export interface SubtitleRun {
  text: string;
  navigationEndpoint?: StickyNavigationEndpoint;
}

export interface StickyNavigationEndpoint {
  clickTrackingParams: string;
  browseEndpoint: BrowseEndpoint;
}

export interface MusicDetailHeaderRendererThumbnail {
  croppedSquareThumbnailRenderer: CroppedSquareThumbnailRenderer;
}

export interface CroppedSquareThumbnailRenderer {
  thumbnail: MusicThumbnailRendererThumbnail;
  trackingParams: string;
}

export interface ResponseContext {
  visitorData: string;
  serviceTrackingParams: ServiceTrackingParam[];
}

export interface ServiceTrackingParam {
  service: string;
  params: Param[];
}

export interface Param {
  key: string;
  value: string;
}
