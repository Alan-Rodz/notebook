// ** Local ***********************************************************************
export * from './service';

// ** Service-Common **************************************************************
export {
  // == Schema ====================================================================
  NotebookSchemaType,

  // -- Schema Version ------------------------------------------------------------
  NotebookSchemaVersion,

  SchemaV2,

  // == Attributes ================================================================
  AttributeType,
  AttributeValue,
  Attributes,

  Margin,
  MarginAttribute,
  isMarginAttribute,
  Padding,
  PaddingAttribute,
  isPaddingAttribute,
  SpacingAttribute,
  SpacingType,
  getOppositeSpacingAttribute,

  TextStyleAttributes,
  TextAlign,
  VerticalAlign,

  HTMLAttributes,
  StyleAttributes,

  SetAttributeType,

  InvalidMergedAttributeValue,
  MergedAttributeValue,
  mergeAttributes,
  mergeAttributeValues,
  getRenderAttributes,
  isStyleAttribute,

  AsyncNodeAttributes,
  isAsyncNodeAttributes,

  CodeBlockAttributes,
  isCodeBlockAttributes,
  CodeBlockType,

  CodeBlockAsyncNodeAttributes,
  isCodeBlockAsyncNodeAttributes,
  CodeBlockReference,
  REMOVED_CODEBLOCK_VISUALID,

  Demo2AsyncNodeAttributes,
  DEFAULT_DEMO_2_ASYNC_NODE_ID,
  DEFAULT_DEMO_2_ASYNC_NODE_DELAY,
  DEFAULT_DEMO_2_ASYNC_NODE_STATUS,

  DemoAsyncNodeAttributes,
  createDefaultDemoAsyncNodeAttributes,
  DEFAULT_DEMO_ASYNC_NODE_ID,
  DEFAULT_DEMO_ASYNC_NODE_DELAY,
  DEFAULT_DEMO_ASYNC_NODE_STATUS,
  DEFAULT_DEMO_ASYNC_NODE_TEXT,
  DEMO_ASYNC_NODE_TEXT_STYLE,
  DEMO_ASYNC_NODE_STATUS_COLOR,
  DEMO_ASYNC_NODE_DATA_STATE,
  DEMO_ASYNC_NODE_BORDER_COLOR,

  HeadingLevel,
  getHeadingLevelFromTag,
  isHeadingLevel,
  HeadingAttributes,

  ParagraphAttributes,

  ImageAttributes,
  DefaultImageAttributes,
  MAX_IMAGE_HEIGHT,
  MIN_IMAGE_HEIGHT,
  MAX_IMAGE_WIDTH,
  MIN_IMAGE_WIDTH,

  LinkAttributes,
  isLinkMarkAttributes,
  DEFAULT_LINK_ATTRIBUTES,
  LinkTarget,
  isLinkTargetValue,
  DEFAULT_LINK_HREF,
  DEFAULT_LINK_TAG,
  DEFAULT_LINK_TARGET,
  LINK_PROTOCOLS,
  PREVENT_LINK_META,

  // == Nodes =====================================================================
  JSONNode,
  NodeName,
  NodeTag,
  NodeIdentifier,
  generateNodeId,
  getNodeName,
  getNodeOffset,

  asyncNodes,

  // -- Node Specs ----------------------------------------------------------------
  NodeSpecs,
  CodeBlockNodeSpec,
  DemoAsyncNodeSpec,
  Demo2AsyncNodeSpec,
  DocumentNodeSpec,
  HeadingNodeSpec,
  ImageNodeSpec,
  ParagraphNodeSpec,
  TextNodeSpec,

  getNodeOutputSpec,

  // -- Node Types ----------------------------------------------------------------
  AsyncNodeType,
  isAsyncNode,

  CodeBlockNodeType,
  getCodeblockNodeType,
  isCodeBlockNode,

  CodeBlockAsyncNodeType,
  isCodeBlockAsyncNode,

  Demo2AsyncNodeType,
  getDemo2AsyncNodeNodeType,
  isDemo2AsyncNode,

  DemoAsyncNodeType,
  getDemoAsyncNodeNodeType,
  isDemoAsyncNode,

  DocumentNodeType,
  getDocumentNodeType,
  isDocumentNode,

  HeadingNodeType,
  createHeadingNode,
  getHeadingNodeType,
  isHeadingNode,

  ImageNodeType,
  createImageNode,
  getImageNodeType,
  isImageNode,

  ParagraphNodeType,
  createParagraphNode,
  getParagraphNodeType,
  isParagraphNode,

  TextNodeType,
  createTextNode,
  getTextNodeType,
  isTextNode,

  // == Marks =====================================================================
  JSONMark,
  MarkName,
  getMarkName,
  getMarkValue,

  // -- Mark Specs ----------------------------------------------------------------
  BoldMarkSpec,
  LinkMarkSpec,
  MarkSpecs,
  ReplacedTextMarkMarkSpec,
  StrikethroughMarkSpec,
  TextStyleMarkSpec,

  getMarkOutputSpec,

  // -- Mark Types ----------------------------------------------------------------
  BoldMarkType,
  createBoldMark,
  getBoldMarkType,
  isBoldMark,

  LinkMarkType,
  createLinkMark,
  getLinkMarkType,
  isLinkMark,

  ReplacedTextMarkMarkType,
  createReplacedTextMarkMark,
  getReplacedTextMarkMarkType,
  isReplacedTextMarkMark,

  StrikethroughMarkType,
  createStrikethroughMark,
  getStrikethroughMarkType,
  isStrikethroughMark,

  TextStyleMarkType,
  createTextStyleMark,
  getTextStyleMarkType,
  isTextStyleMark,

  // == HTML Renderer =============================================================
  DATA_MARK_TYPE,
  DATA_NODE_TYPE,

  convertContentToHTML,
  getRenderTag,

  // -- HTML Render Specs ---------------------------------------------------------
  CodeBlockNodeRendererSpec,
  Demo2AsyncNodeRendererSpec,
  DemoAsyncNodeRendererSpec,
  DocumentNodeRendererSpec,
  HeadingNodeRendererSpec,
  ParagraphNodeRendererSpec,
  TextNodeRendererSpec,

  MarkRendererSpecs,
  NodeRendererSpecs,

  RendererState,

  CodeBlockRendererState,

  // == Command ===================================================================
  CommandFunctionType,

  // == Content ===================================================================
  NotebookDocumentContent,
  contentToNode,
  contentToJSONNode,
  nodeToContent,

  // == Utility ===================================================================
  // -- State ---------------------------------------------------------------------
  codeBlockLevel,
  updateStack,

  VisualIdMap,

  // -- Async ---------------------------------------------------------------------
  asyncNodeStatusToColor,
  AsyncNodeStatus,
  ASYNC_NODE_DIRTY_DATATYPE,

  // ------------------------------------------------------------------------------
  getParentNode,
  getWrapStyles,
  computeRemovedNodeObjs,
  findContentDifferencePositions,
  getNodesAffectedByStepMap,
  nodeToTagId,
  wereNodesAffectedByTransaction,
  NodeFound,
} from '@ureeka-notebook/service-common';
