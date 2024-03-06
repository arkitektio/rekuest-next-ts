import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AnyDefault: any;
  Arg: any;
  DateTime: any;
  Identifier: any;
  InstanceId: any;
  NodeHash: any;
  SearchQuery: any;
  ValueMap: any;
};

export type AckInput = {
  assignation: Scalars['ID'];
};

export type Agent = {
  __typename?: 'Agent';
  id: Scalars['ID'];
  instanceId: Scalars['InstanceId'];
  registry: Registry;
};

export type AgentFilter = {
  AND?: InputMaybe<AgentFilter>;
  OR?: InputMaybe<AgentFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  instanceId: Scalars['String'];
};

export type App = {
  __typename?: 'App';
  id: Scalars['ID'];
};

export type ArgNode = GraphNode & {
  __typename?: 'ArgNode';
  argStuff?: Maybe<Scalars['String']>;
  constants: Array<Port>;
  constantsMap: Scalars['ValueMap'];
  description: Scalars['String'];
  globalsMap: Scalars['ValueMap'];
  id: Scalars['ID'];
  ins: Array<Array<Port>>;
  kind: GraphNodeKind;
  outs: Array<Array<Port>>;
  parentNode?: Maybe<Scalars['String']>;
  position: Position;
  title: Scalars['String'];
};

export type ArkitektGraphNode = AssignableNode & GraphNode & RetriableNode & {
  __typename?: 'ArkitektGraphNode';
  allowLocalExecution: Scalars['Boolean'];
  binds: Binds;
  constants: Array<Port>;
  constantsMap: Scalars['ValueMap'];
  description: Scalars['String'];
  globalsMap: Scalars['ValueMap'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  ins: Array<Array<Port>>;
  kind: GraphNodeKind;
  mapStrategy: MapStrategy;
  nextTimeout?: Maybe<Scalars['Int']>;
  nodeKind: NodeKind;
  outs: Array<Array<Port>>;
  parentNode?: Maybe<Scalars['String']>;
  position: Position;
  retries?: Maybe<Scalars['Int']>;
  retryDelay?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type AssignInput = {
  args: Array<Scalars['Arg']>;
  parent?: InputMaybe<Scalars['ID']>;
  reference?: InputMaybe<Scalars['String']>;
  reservation: Scalars['ID'];
};

export type AssignWidget = {
  kind: AssignWidgetKind;
};

export type AssignWidgetInput = {
  asParagraph?: InputMaybe<Scalars['Boolean']>;
  choices?: InputMaybe<Array<ChoiceInput>>;
  hook?: InputMaybe<Scalars['String']>;
  kind: AssignWidgetKind;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['SearchQuery']>;
  step?: InputMaybe<Scalars['Int']>;
  ward?: InputMaybe<Scalars['String']>;
};

export enum AssignWidgetKind {
  Choice = 'CHOICE',
  Custom = 'CUSTOM',
  Search = 'SEARCH',
  Slider = 'SLIDER',
  String = 'STRING'
}

export type AssignableNode = {
  nextTimeout?: Maybe<Scalars['Int']>;
};

export type Assignation = {
  __typename?: 'Assignation';
  args: Scalars['AnyDefault'];
  createdAt: Scalars['DateTime'];
  events: Array<AssignationEvent>;
  id: Scalars['ID'];
  name: Scalars['String'];
  node: Node;
  parent: Assignation;
  reference?: Maybe<Scalars['String']>;
  status: AssignationStatus;
  statusMessage?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  waiter: Waiter;
};


export type AssignationEventsArgs = {
  filters?: InputMaybe<AssignationEventFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type AssignationEvent = {
  __typename?: 'AssignationEvent';
  assignation: Assignation;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  kind: AssignationEventKind;
  level: LogLevel;
  name: Scalars['String'];
  returns: Scalars['AnyDefault'];
};

export type AssignationEventFilter = {
  AND?: InputMaybe<AssignationEventFilter>;
  OR?: InputMaybe<AssignationEventFilter>;
  kind?: InputMaybe<Array<AssignationEventKind>>;
};

export enum AssignationEventKind {
  Assign = 'ASSIGN',
  Bound = 'BOUND',
  Done = 'DONE',
  Log = 'LOG',
  Progress = 'PROGRESS',
  Unassign = 'UNASSIGN',
  Yield = 'YIELD'
}

export type AssignationFilter = {
  AND?: InputMaybe<AssignationFilter>;
  OR?: InputMaybe<AssignationFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  reservation?: InputMaybe<ReservationFilter>;
  status?: InputMaybe<Array<AssignationStatus>>;
};

export enum AssignationStatus {
  Assigning = 'ASSIGNING',
  Cancelled = 'CANCELLED',
  Critical = 'CRITICAL',
  Done = 'DONE',
  Ongoing = 'ONGOING'
}

export type Binds = {
  __typename?: 'Binds';
  templates: Array<Scalars['ID']>;
};

export type BindsInput = {
  templates: Array<Scalars['ID']>;
};

export type ChildPort = {
  __typename?: 'ChildPort';
  assignWidget?: Maybe<AssignWidget>;
  child?: Maybe<ChildPort>;
  default?: Maybe<Scalars['AnyDefault']>;
  identifier?: Maybe<Scalars['Identifier']>;
  kind: PortKind;
  label?: Maybe<Scalars['String']>;
  nullable: Scalars['Boolean'];
  returnWidget?: Maybe<ReturnWidget>;
  scope: PortScope;
  variants?: Maybe<Array<ChildPort>>;
};

export type ChildPortInput = {
  assignWidget?: InputMaybe<AssignWidgetInput>;
  child?: InputMaybe<ChildPortInput>;
  default?: InputMaybe<Scalars['AnyDefault']>;
  description?: InputMaybe<Scalars['String']>;
  effects?: InputMaybe<Array<EffectInput>>;
  identifier?: InputMaybe<Scalars['Identifier']>;
  kind: PortKind;
  label?: InputMaybe<Scalars['String']>;
  nullable: Scalars['Boolean'];
  returnWidget?: InputMaybe<ReturnWidgetInput>;
  scope: PortScope;
  variants?: InputMaybe<Array<ChildPortInput>>;
};

export type Choice = {
  __typename?: 'Choice';
  description?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  value: Scalars['String'];
};

export type ChoiceAssignWidget = AssignWidget & {
  __typename?: 'ChoiceAssignWidget';
  choices?: Maybe<Array<Choice>>;
  kind: AssignWidgetKind;
};

export type ChoiceInput = {
  description?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  value: Scalars['AnyDefault'];
};

export type ChoiceReturnWidget = ReturnWidget & {
  __typename?: 'ChoiceReturnWidget';
  choices?: Maybe<Array<Choice>>;
  kind: ReturnWidgetKind;
};

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID'];
  name: Scalars['String'];
  nodes: Array<Node>;
};


export type CollectionNodesArgs = {
  filters?: InputMaybe<NodeFilter>;
  order?: InputMaybe<NodeOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type CreateTemplateInput = {
  definition: DefinitionInput;
  instanceId?: InputMaybe<Scalars['InstanceId']>;
  interface: Scalars['String'];
  params?: InputMaybe<Scalars['AnyDefault']>;
};

export type CreateTestCaseInput = {
  description?: InputMaybe<Scalars['String']>;
  isBenchmark?: Scalars['Boolean'];
  key: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  node: Scalars['ID'];
};

export type CreateTestResultInput = {
  case: Scalars['ID'];
  passed: Scalars['Boolean'];
  result?: InputMaybe<Scalars['String']>;
  template: Scalars['ID'];
};

export type CreateWorkspaceInput = {
  description?: InputMaybe<Scalars['String']>;
  graph?: InputMaybe<GraphInput>;
  title?: InputMaybe<Scalars['String']>;
  vanilla?: Scalars['Boolean'];
};

export type CustomAssignWidget = AssignWidget & {
  __typename?: 'CustomAssignWidget';
  hook: Scalars['String'];
  kind: AssignWidgetKind;
  ward: Scalars['String'];
};

export type CustomEffect = Effect & {
  __typename?: 'CustomEffect';
  dependencies: Array<EffectDependency>;
  hook: Scalars['String'];
  kind: Scalars['String'];
  ward: Scalars['String'];
};

export type CustomReturnWidget = ReturnWidget & {
  __typename?: 'CustomReturnWidget';
  hook: Scalars['String'];
  kind: ReturnWidgetKind;
  ward: Scalars['String'];
};

export type DefinitionInput = {
  args?: InputMaybe<Array<PortInput>>;
  collections?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  interfaces?: InputMaybe<Array<Scalars['String']>>;
  isTestFor?: InputMaybe<Array<Scalars['String']>>;
  kind: NodeKind;
  name: Scalars['String'];
  portGroups?: InputMaybe<Array<PortGroupInput>>;
  returns?: InputMaybe<Array<PortInput>>;
};

export type Effect = {
  dependencies: Array<EffectDependency>;
  kind: Scalars['String'];
};

export type EffectDependency = {
  __typename?: 'EffectDependency';
  condition: LogicalCondition;
  key: Scalars['String'];
  value: Scalars['String'];
};

export type EffectDependencyInput = {
  condition: LogicalCondition;
  key: Scalars['String'];
  value: Scalars['AnyDefault'];
};

export type EffectInput = {
  dependencies: Array<EffectDependencyInput>;
  kind: EffectKind;
};

export enum EffectKind {
  Custom = 'CUSTOM',
  Message = 'MESSAGE'
}

export type Flow = {
  __typename?: 'Flow';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  graph: Graph;
  id: Scalars['ID'];
  title: Scalars['String'];
  workspace: Workspace;
};

export type FlowFilter = {
  AND?: InputMaybe<FlowFilter>;
  OR?: InputMaybe<FlowFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  workspace?: InputMaybe<WorkspaceFilter>;
};

export type GlobalArg = {
  __typename?: 'GlobalArg';
  key: Scalars['String'];
  port: Port;
};

export type GlobalArgInput = {
  key: Scalars['String'];
  port: PortInput;
};

export type Graph = {
  __typename?: 'Graph';
  edges: Array<GraphEdge>;
  globals: Array<GlobalArg>;
  nodes: Array<GraphNode>;
  zoom: Scalars['Float'];
};

export type GraphEdge = {
  id: Scalars['ID'];
  kind: GraphEdgeKind;
  source: Scalars['String'];
  sourceHandle: Scalars['String'];
  stream: Array<StreamItem>;
  target: Scalars['String'];
  targetHandle: Scalars['String'];
};

export type GraphEdgeInput = {
  id: Scalars['String'];
  kind: GraphEdgeKind;
  label?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['String']>;
  source: Scalars['String'];
  sourceHandle: Scalars['String'];
  stream: Array<StreamItemInput>;
  target: Scalars['String'];
  targetHandle: Scalars['String'];
};

export enum GraphEdgeKind {
  Logging = 'LOGGING',
  Vanilla = 'VANILLA'
}

export type GraphInput = {
  edges: Array<GraphEdgeInput>;
  globals: Array<GlobalArgInput>;
  nodes: Array<GraphNodeInput>;
};

export type GraphNode = {
  constants: Array<Port>;
  constantsMap: Scalars['ValueMap'];
  description: Scalars['String'];
  globalsMap: Scalars['ValueMap'];
  id: Scalars['ID'];
  ins: Array<Array<Port>>;
  kind: GraphNodeKind;
  outs: Array<Array<Port>>;
  parentNode?: Maybe<Scalars['String']>;
  position: Position;
  title: Scalars['String'];
};

export type GraphNodeInput = {
  allowLocalExecution?: InputMaybe<Scalars['Boolean']>;
  binds?: InputMaybe<BindsInput>;
  constants: Array<PortInput>;
  constantsMap: Scalars['ValueMap'];
  description?: InputMaybe<Scalars['String']>;
  globalsMap: Scalars['ValueMap'];
  hash?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  implementation?: InputMaybe<ReactiveImplementation>;
  ins: Array<Array<PortInput>>;
  kind: GraphNodeKind;
  mapStrategy?: InputMaybe<MapStrategy>;
  nextTimeout?: InputMaybe<Scalars['Int']>;
  nodeKind?: InputMaybe<NodeKind>;
  outs: Array<Array<PortInput>>;
  parentNode?: InputMaybe<Scalars['String']>;
  position: PositionInput;
  retries?: InputMaybe<Scalars['Int']>;
  retryDelay?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum GraphNodeKind {
  Args = 'ARGS',
  Arkitekt = 'ARKITEKT',
  Reactive = 'REACTIVE',
  Returns = 'RETURNS'
}

export enum LogLevel {
  Critical = 'CRITICAL',
  Debug = 'DEBUG',
  Error = 'ERROR',
  Info = 'INFO',
  Warn = 'WARN'
}

export type LoggingEdge = GraphEdge & {
  __typename?: 'LoggingEdge';
  id: Scalars['ID'];
  kind: GraphEdgeKind;
  level: LogLevel;
  source: Scalars['String'];
  sourceHandle: Scalars['String'];
  stream: Array<StreamItem>;
  target: Scalars['String'];
  targetHandle: Scalars['String'];
};

export enum LogicalCondition {
  In = 'IN',
  Is = 'IS',
  IsNot = 'IS_NOT'
}

export enum MapStrategy {
  Map = 'MAP',
  MapFrom = 'MAP_FROM',
  MapTo = 'MAP_TO'
}

export type MessageEffect = Effect & {
  __typename?: 'MessageEffect';
  dependencies: Array<EffectDependency>;
  kind: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ack: Assignation;
  assign: Assignation;
  createTemplate: Template;
  createTestCase: TestCase;
  createTestResult: TestResult;
  createWorkspace: Workspace;
  reserve: Reservation;
  unassign: Assignation;
  unreserve: Reservation;
  updateWorkspace: Workspace;
};


export type MutationAckArgs = {
  input: AckInput;
};


export type MutationAssignArgs = {
  input: AssignInput;
};


export type MutationCreateTemplateArgs = {
  input: CreateTemplateInput;
};


export type MutationCreateTestCaseArgs = {
  input: CreateTestCaseInput;
};


export type MutationCreateTestResultArgs = {
  input: CreateTestResultInput;
};


export type MutationCreateWorkspaceArgs = {
  input: CreateWorkspaceInput;
};


export type MutationReserveArgs = {
  input: ReserveInput;
};


export type MutationUnassignArgs = {
  input: UnassignInput;
};


export type MutationUnreserveArgs = {
  input: UnreserveInput;
};


export type MutationUpdateWorkspaceArgs = {
  input: UpdateWorkspaceInput;
};

export type Node = {
  __typename?: 'Node';
  args: Array<Port>;
  collections: Array<Collection>;
  definedAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  hash: Scalars['NodeHash'];
  id: Scalars['ID'];
  isTestFor: Array<Node>;
  kind: NodeKind;
  name: Scalars['String'];
  portGroups: Array<PortGroup>;
  protocols: Array<Protocol>;
  returns: Array<Port>;
  scope: NodeScope;
  templates: Array<Template>;
  tests: Array<Node>;
};


export type NodeIsTestForArgs = {
  filters?: InputMaybe<NodeFilter>;
  order?: InputMaybe<NodeOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type NodeTemplatesArgs = {
  filters?: InputMaybe<TemplateFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type NodeTestsArgs = {
  filters?: InputMaybe<NodeFilter>;
  order?: InputMaybe<NodeOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type NodeFilter = {
  AND?: InputMaybe<NodeFilter>;
  OR?: InputMaybe<NodeFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StrFilterLookup>;
};

export enum NodeKind {
  Function = 'FUNCTION',
  Generator = 'GENERATOR'
}

export type NodeOrder = {
  definedAt?: InputMaybe<Ordering>;
};

export enum NodeScope {
  BridgeGlobalToLocal = 'BRIDGE_GLOBAL_TO_LOCAL',
  BridgeLocalToGlobal = 'BRIDGE_LOCAL_TO_GLOBAL',
  Global = 'GLOBAL',
  Local = 'LOCAL'
}

export type OffsetPaginationInput = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
};

export enum Ordering {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Port = {
  __typename?: 'Port';
  assignWidget?: Maybe<AssignWidget>;
  child?: Maybe<ChildPort>;
  default?: Maybe<Scalars['AnyDefault']>;
  description?: Maybe<Scalars['String']>;
  effects?: Maybe<Array<Effect>>;
  groups?: Maybe<Array<Scalars['String']>>;
  identifier?: Maybe<Scalars['Identifier']>;
  key: Scalars['String'];
  kind: PortKind;
  label?: Maybe<Scalars['String']>;
  nullable: Scalars['Boolean'];
  returnWidget?: Maybe<ReturnWidget>;
  scope: PortScope;
  variants?: Maybe<Array<ChildPort>>;
};

export type PortGroup = {
  __typename?: 'PortGroup';
  hidden: Scalars['Boolean'];
  key: Scalars['String'];
};

export type PortGroupInput = {
  hidden: Scalars['Boolean'];
  key: Scalars['String'];
};

export type PortInput = {
  assignWidget?: InputMaybe<AssignWidgetInput>;
  child?: InputMaybe<ChildPortInput>;
  default?: InputMaybe<Scalars['AnyDefault']>;
  description?: InputMaybe<Scalars['String']>;
  effects?: InputMaybe<Array<EffectInput>>;
  groups?: InputMaybe<Array<Scalars['String']>>;
  identifier?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  kind: PortKind;
  label?: InputMaybe<Scalars['String']>;
  nullable: Scalars['Boolean'];
  returnWidget?: InputMaybe<ReturnWidgetInput>;
  scope: PortScope;
  variants?: InputMaybe<Array<ChildPortInput>>;
};

export enum PortKind {
  Bool = 'BOOL',
  Date = 'DATE',
  Dict = 'DICT',
  Float = 'FLOAT',
  Int = 'INT',
  List = 'LIST',
  String = 'STRING',
  Structure = 'STRUCTURE',
  Union = 'UNION'
}

export enum PortScope {
  Global = 'GLOBAL',
  Local = 'LOCAL'
}

export type Position = {
  __typename?: 'Position';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type PositionInput = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type Protocol = {
  __typename?: 'Protocol';
  id: Scalars['ID'];
  name: Scalars['String'];
  nodes: Array<Node>;
};


export type ProtocolNodesArgs = {
  filters?: InputMaybe<NodeFilter>;
  order?: InputMaybe<NodeOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type Provision = {
  __typename?: 'Provision';
  agent: Agent;
  id: Scalars['ID'];
  name: Scalars['String'];
  status: ProvisionStatus;
  template: Template;
};

export type ProvisionEvent = {
  __typename?: 'ProvisionEvent';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  kind: ProvisionEventKind;
  level: LogLevel;
  provision: Provision;
};

export enum ProvisionEventKind {
  Change = 'CHANGE',
  Log = 'LOG'
}

export type ProvisionFilter = {
  AND?: InputMaybe<ProvisionFilter>;
  OR?: InputMaybe<ProvisionFilter>;
  agent?: InputMaybe<AgentFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  status?: InputMaybe<Array<ProvisionStatus>>;
};

export enum ProvisionStatus {
  Active = 'ACTIVE',
  Bound = 'BOUND',
  Canceling = 'CANCELING',
  Cancelled = 'CANCELLED',
  Critical = 'CRITICAL',
  Denied = 'DENIED',
  Disconnected = 'DISCONNECTED',
  Ended = 'ENDED',
  Error = 'ERROR',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Providing = 'PROVIDING',
  Reconnecting = 'RECONNECTING',
  Refused = 'REFUSED'
}

export type Query = {
  __typename?: 'Query';
  agent: Agent;
  assignation: Assignation;
  assignations: Array<Assignation>;
  flow: Flow;
  flows: Array<Flow>;
  node: Node;
  nodes: Array<Node>;
  provision: Provision;
  provisions: Array<Provision>;
  reactiveTemplate: ReactiveTemplate;
  reactiveTemplates: Array<ReactiveTemplate>;
  reservation: Reservation;
  reservations: Array<Reservation>;
  template: Template;
  templates: Array<Template>;
  testCase: TestCase;
  testCases: Array<TestCase>;
  testResult: TestResult;
  testResults: Array<TestResult>;
  workspace: Workspace;
  workspaces: Array<Workspace>;
};


export type QueryAgentArgs = {
  id: Scalars['ID'];
};


export type QueryAssignationArgs = {
  id: Scalars['ID'];
};


export type QueryAssignationsArgs = {
  filters?: InputMaybe<AssignationFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryFlowArgs = {
  id: Scalars['ID'];
};


export type QueryFlowsArgs = {
  filters?: InputMaybe<FlowFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryNodeArgs = {
  assignation?: InputMaybe<Scalars['ID']>;
  hash?: InputMaybe<Scalars['NodeHash']>;
  id?: InputMaybe<Scalars['ID']>;
  reservation?: InputMaybe<Scalars['ID']>;
  template?: InputMaybe<Scalars['ID']>;
};


export type QueryNodesArgs = {
  filters?: InputMaybe<NodeFilter>;
  order?: InputMaybe<NodeOrder>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryProvisionArgs = {
  id: Scalars['ID'];
};


export type QueryProvisionsArgs = {
  filters?: InputMaybe<ProvisionFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryReactiveTemplateArgs = {
  id: Scalars['ID'];
};


export type QueryReactiveTemplatesArgs = {
  filters?: InputMaybe<ReactiveTemplateFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryReservationArgs = {
  id: Scalars['ID'];
};


export type QueryReservationsArgs = {
  filters?: InputMaybe<ReservationFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryTemplateArgs = {
  id: Scalars['ID'];
};


export type QueryTemplatesArgs = {
  filters?: InputMaybe<TemplateFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryTestCaseArgs = {
  id: Scalars['ID'];
};


export type QueryTestCasesArgs = {
  filters?: InputMaybe<TestCaseFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryTestResultArgs = {
  id: Scalars['ID'];
};


export type QueryTestResultsArgs = {
  filters?: InputMaybe<TestResultFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};


export type QueryWorkspaceArgs = {
  id: Scalars['ID'];
};


export type QueryWorkspacesArgs = {
  filters?: InputMaybe<WorkspaceFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export enum ReactiveImplementation {
  Add = 'ADD',
  All = 'ALL',
  And = 'AND',
  BufferComplete = 'BUFFER_COMPLETE',
  BufferUntil = 'BUFFER_UNTIL',
  Chunk = 'CHUNK',
  Combinelatest = 'COMBINELATEST',
  Delay = 'DELAY',
  DelayUntil = 'DELAY_UNTIL',
  Divide = 'DIVIDE',
  Ensure = 'ENSURE',
  Filter = 'FILTER',
  Foreach = 'FOREACH',
  Gate = 'GATE',
  If = 'IF',
  Modulo = 'MODULO',
  Multiply = 'MULTIPLY',
  Omit = 'OMIT',
  Power = 'POWER',
  Prefix = 'PREFIX',
  Split = 'SPLIT',
  Subtract = 'SUBTRACT',
  Suffix = 'SUFFIX',
  ToList = 'TO_LIST',
  Withlatest = 'WITHLATEST',
  Zip = 'ZIP'
}

export type ReactiveNode = GraphNode & {
  __typename?: 'ReactiveNode';
  argStuff?: Maybe<Scalars['String']>;
  constants: Array<Port>;
  constantsMap: Scalars['ValueMap'];
  description: Scalars['String'];
  globalsMap: Scalars['ValueMap'];
  id: Scalars['ID'];
  implementation: ReactiveImplementation;
  ins: Array<Array<Port>>;
  kind: GraphNodeKind;
  outs: Array<Array<Port>>;
  parentNode?: Maybe<Scalars['String']>;
  position: Position;
  title: Scalars['String'];
};

export type ReactiveTemplate = {
  __typename?: 'ReactiveTemplate';
  constants: Array<Port>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  implementation: ReactiveImplementation;
  ins: Array<Array<Port>>;
  outs: Array<Array<Port>>;
  title: Scalars['String'];
};

export type ReactiveTemplateFilter = {
  AND?: InputMaybe<ReactiveTemplateFilter>;
  OR?: InputMaybe<ReactiveTemplateFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  implementations?: InputMaybe<Array<ReactiveImplementation>>;
};

export type Registry = {
  __typename?: 'Registry';
  agents: Array<Agent>;
  app: App;
  id: Scalars['ID'];
  user: User;
};


export type RegistryAgentsArgs = {
  filters?: InputMaybe<AgentFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type Reservation = {
  __typename?: 'Reservation';
  binds: Binds;
  id: Scalars['ID'];
  name: Scalars['String'];
  node: Node;
  provisions: Array<Provision>;
  reference: Scalars['String'];
  status: ReservationStatus;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  waiter: Waiter;
};


export type ReservationProvisionsArgs = {
  filters?: InputMaybe<ProvisionFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type ReservationEvent = {
  __typename?: 'ReservationEvent';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  kind: ReservationEventKind;
  level: LogLevel;
  reservation: Reservation;
};

export enum ReservationEventKind {
  Change = 'CHANGE',
  Log = 'LOG'
}

export type ReservationFilter = {
  AND?: InputMaybe<ReservationFilter>;
  OR?: InputMaybe<ReservationFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  status?: InputMaybe<Array<ReservationStatus>>;
  waiter?: InputMaybe<WaiterFilter>;
};

export enum ReservationStatus {
  Active = 'ACTIVE',
  Ended = 'ENDED',
  Inactive = 'INACTIVE',
  Unconnected = 'UNCONNECTED'
}

export type ReserveInput = {
  binds?: InputMaybe<BindsInput>;
  hash?: InputMaybe<Scalars['NodeHash']>;
  instanceId: Scalars['InstanceId'];
  node?: InputMaybe<Scalars['ID']>;
  provision?: InputMaybe<Scalars['ID']>;
  reference?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type RetriableNode = {
  retries?: Maybe<Scalars['Int']>;
  retryDelay?: Maybe<Scalars['Int']>;
};

export type ReturnNode = GraphNode & {
  __typename?: 'ReturnNode';
  constants: Array<Port>;
  constantsMap: Scalars['ValueMap'];
  description: Scalars['String'];
  globalsMap: Scalars['ValueMap'];
  id: Scalars['ID'];
  ins: Array<Array<Port>>;
  kind: GraphNodeKind;
  outs: Array<Array<Port>>;
  parentNode?: Maybe<Scalars['String']>;
  position: Position;
  returnStuff?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ReturnWidget = {
  kind: ReturnWidgetKind;
};

export type ReturnWidgetInput = {
  choices?: InputMaybe<Array<ChoiceInput>>;
  hook?: InputMaybe<Scalars['String']>;
  kind: ReturnWidgetKind;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['SearchQuery']>;
  step?: InputMaybe<Scalars['Int']>;
  ward?: InputMaybe<Scalars['String']>;
};

export enum ReturnWidgetKind {
  Choice = 'CHOICE',
  Custom = 'CUSTOM'
}

export type SearchAssignWidget = AssignWidget & {
  __typename?: 'SearchAssignWidget';
  kind: AssignWidgetKind;
  query: Scalars['String'];
  ward: Scalars['String'];
};

export type SliderAssignWidget = AssignWidget & {
  __typename?: 'SliderAssignWidget';
  kind: AssignWidgetKind;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export type StrFilterLookup = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  exact?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iContains?: InputMaybe<Scalars['String']>;
  iEndsWith?: InputMaybe<Scalars['String']>;
  iExact?: InputMaybe<Scalars['String']>;
  iRegex?: InputMaybe<Scalars['String']>;
  iStartsWith?: InputMaybe<Scalars['String']>;
  inList?: InputMaybe<Array<Scalars['String']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  nContains?: InputMaybe<Scalars['String']>;
  nEndsWith?: InputMaybe<Scalars['String']>;
  nExact?: InputMaybe<Scalars['String']>;
  nGt?: InputMaybe<Scalars['String']>;
  nGte?: InputMaybe<Scalars['String']>;
  nIContains?: InputMaybe<Scalars['String']>;
  nIEndsWith?: InputMaybe<Scalars['String']>;
  nIExact?: InputMaybe<Scalars['String']>;
  nIRegex?: InputMaybe<Scalars['String']>;
  nIStartsWith?: InputMaybe<Scalars['String']>;
  nInList?: InputMaybe<Array<Scalars['String']>>;
  nIsNull?: InputMaybe<Scalars['Boolean']>;
  nLt?: InputMaybe<Scalars['String']>;
  nLte?: InputMaybe<Scalars['String']>;
  nRange?: InputMaybe<Array<Scalars['String']>>;
  nRegex?: InputMaybe<Scalars['String']>;
  nStartsWith?: InputMaybe<Scalars['String']>;
  range?: InputMaybe<Array<Scalars['String']>>;
  regex?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StreamItem = {
  __typename?: 'StreamItem';
  kind: PortKind;
  label: Scalars['String'];
};

export type StreamItemInput = {
  kind: PortKind;
  label: Scalars['String'];
};

export type StringAssignWidget = AssignWidget & {
  __typename?: 'StringAssignWidget';
  asParagraph: Scalars['Boolean'];
  kind: AssignWidgetKind;
  placeholder: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  assignations: AssignationEvent;
  newNodes: Node;
  provisions: ProvisionEvent;
  reservations: ReservationEvent;
};


export type SubscriptionAssignationsArgs = {
  instanceId: Scalars['InstanceId'];
};


export type SubscriptionNewNodesArgs = {
  cage: Scalars['ID'];
};


export type SubscriptionProvisionsArgs = {
  instanceId: Scalars['InstanceId'];
};


export type SubscriptionReservationsArgs = {
  instanceId: Scalars['InstanceId'];
};

export type Template = {
  __typename?: 'Template';
  agent: Agent;
  id: Scalars['ID'];
  interface: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  node: Node;
  params: Scalars['AnyDefault'];
};

export type TemplateFilter = {
  AND?: InputMaybe<TemplateFilter>;
  OR?: InputMaybe<TemplateFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  interface?: InputMaybe<StrFilterLookup>;
};

export type TestCase = {
  __typename?: 'TestCase';
  description: Scalars['String'];
  id: Scalars['ID'];
  isBenchmark: Scalars['Boolean'];
  key: Scalars['String'];
  name: Scalars['String'];
  node: Node;
  results: Array<TestResult>;
};


export type TestCaseResultsArgs = {
  filters?: InputMaybe<TestResultFilter>;
  pagination?: InputMaybe<OffsetPaginationInput>;
};

export type TestCaseFilter = {
  AND?: InputMaybe<TestCaseFilter>;
  OR?: InputMaybe<TestCaseFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StrFilterLookup>;
};

export type TestResult = {
  __typename?: 'TestResult';
  case: TestCase;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  passed: Scalars['Boolean'];
  template: Template;
  updatedAt: Scalars['DateTime'];
};

export type TestResultFilter = {
  AND?: InputMaybe<TestResultFilter>;
  OR?: InputMaybe<TestResultFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StrFilterLookup>;
};

export type UnassignInput = {
  assignation: Scalars['ID'];
};

export type UnreserveInput = {
  reservation: Scalars['ID'];
};

export type UpdateWorkspaceInput = {
  description?: InputMaybe<Scalars['String']>;
  graph: GraphInput;
  title?: InputMaybe<Scalars['String']>;
  workspace: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
};

export type VanillaEdge = GraphEdge & {
  __typename?: 'VanillaEdge';
  id: Scalars['ID'];
  kind: GraphEdgeKind;
  label?: Maybe<Scalars['String']>;
  source: Scalars['String'];
  sourceHandle: Scalars['String'];
  stream: Array<StreamItem>;
  target: Scalars['String'];
  targetHandle: Scalars['String'];
};

export type Waiter = {
  __typename?: 'Waiter';
  id: Scalars['ID'];
  instanceId: Scalars['InstanceId'];
  registry: Registry;
};

export type WaiterFilter = {
  AND?: InputMaybe<WaiterFilter>;
  OR?: InputMaybe<WaiterFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  instanceId: Scalars['InstanceId'];
};

export type Workspace = {
  __typename?: 'Workspace';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latestFlow?: Maybe<Flow>;
  title: Scalars['String'];
};

export type WorkspaceFilter = {
  AND?: InputMaybe<WorkspaceFilter>;
  OR?: InputMaybe<WorkspaceFilter>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<StrFilterLookup>;
};

export type PostmanAssignationFragment = { __typename?: 'Assignation', id: string, status: AssignationStatus, args: any, reference?: string | null };

export type AssignationEventFragment = { __typename?: 'AssignationEvent', id: string, kind: AssignationEventKind, level: LogLevel, returns: any, createdAt: any, assignation: { __typename?: 'Assignation', id: string } };

export type StringAssignWidgetFragment = { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean };

export type SliderAssignWidgetFragment = { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null };

export type SearchAssignWidgetFragment = { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string };

export type CustomAssignWidgetFragment = { __typename: 'CustomAssignWidget', ward: string, hook: string };

export type ChoiceAssignWidgetFragment = { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null };

export type ChildPortNestedFragment = { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null };

export type ChildPortFragment = { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null };

export type EffectDependencyFragment = { __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string };

export type CustomEffectFragment = { __typename: 'CustomEffect', kind: string, hook: string, ward: string };

export type MessageEffectFragment = { __typename: 'MessageEffect', kind: string, message: string };

type PortEffect_CustomEffect_Fragment = { __typename: 'CustomEffect', kind: string, hook: string, ward: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> };

type PortEffect_MessageEffect_Fragment = { __typename: 'MessageEffect', kind: string, message: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> };

export type PortEffectFragment = PortEffect_CustomEffect_Fragment | PortEffect_MessageEffect_Fragment;

type AssignWidget_ChoiceAssignWidget_Fragment = { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null };

type AssignWidget_CustomAssignWidget_Fragment = { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string };

type AssignWidget_SearchAssignWidget_Fragment = { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string };

type AssignWidget_SliderAssignWidget_Fragment = { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null };

type AssignWidget_StringAssignWidget_Fragment = { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean };

export type AssignWidgetFragment = AssignWidget_ChoiceAssignWidget_Fragment | AssignWidget_CustomAssignWidget_Fragment | AssignWidget_SearchAssignWidget_Fragment | AssignWidget_SliderAssignWidget_Fragment | AssignWidget_StringAssignWidget_Fragment;

export type PortFragment = { __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, scope: PortScope, kind: PortKind, identifier?: any | null, default?: any | null, groups?: Array<string> | null, effects?: Array<{ __typename: 'CustomEffect', kind: string, hook: string, ward: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> } | { __typename: 'MessageEffect', kind: string, message: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null };

export type CustomReturnWidgetFragment = { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string };

export type ChoiceReturnWidgetFragment = { __typename: 'ChoiceReturnWidget', choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null };

type ReturnWidget_ChoiceReturnWidget_Fragment = { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null };

type ReturnWidget_CustomReturnWidget_Fragment = { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string };

export type ReturnWidgetFragment = ReturnWidget_ChoiceReturnWidget_Fragment | ReturnWidget_CustomReturnWidget_Fragment;

export type PortGroupFragment = { __typename?: 'PortGroup', key: string, hidden: boolean };

export type PortsFragment = { __typename?: 'Node', args: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, scope: PortScope, kind: PortKind, identifier?: any | null, default?: any | null, groups?: Array<string> | null, effects?: Array<{ __typename: 'CustomEffect', kind: string, hook: string, ward: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> } | { __typename: 'MessageEffect', kind: string, message: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null }>, returns: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, scope: PortScope, kind: PortKind, identifier?: any | null, default?: any | null, groups?: Array<string> | null, effects?: Array<{ __typename: 'CustomEffect', kind: string, hook: string, ward: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> } | { __typename: 'MessageEffect', kind: string, message: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null }>, portGroups: Array<{ __typename?: 'PortGroup', key: string, hidden: boolean }> };

export type PostmanReservationFragment = { __typename?: 'Reservation', title?: string | null, status: ReservationStatus, id: string, reference: string };

export type ReservationEventFragment = { __typename?: 'ReservationEvent', id: string, kind: ReservationEventKind, level: LogLevel, createdAt: any, reservation: { __typename?: 'Reservation', id: string } };

export type AcknowledgeMutationVariables = Exact<{
  assignation: Scalars['ID'];
}>;


export type AcknowledgeMutation = { __typename?: 'Mutation', ack: { __typename?: 'Assignation', id: string, status: AssignationStatus, args: any, reference?: string | null } };

export type AssignMutationVariables = Exact<{
  reservation: Scalars['ID'];
  args: Array<Scalars['Arg']>;
}>;


export type AssignMutation = { __typename?: 'Mutation', assign: { __typename?: 'Assignation', id: string, status: AssignationStatus, args: any, reference?: string | null } };

export type ReserveMutationVariables = Exact<{
  instanceId: Scalars['InstanceId'];
  node?: InputMaybe<Scalars['ID']>;
  hash?: InputMaybe<Scalars['NodeHash']>;
  template?: InputMaybe<Scalars['ID']>;
  binds?: InputMaybe<BindsInput>;
  title?: InputMaybe<Scalars['String']>;
}>;


export type ReserveMutation = { __typename?: 'Mutation', reserve: { __typename?: 'Reservation', title?: string | null, status: ReservationStatus, id: string, reference: string } };

export type UnassignMutationVariables = Exact<{
  assignation: Scalars['ID'];
}>;


export type UnassignMutation = { __typename?: 'Mutation', unassign: { __typename?: 'Assignation', id: string } };

export type UnreserveMutationVariables = Exact<{
  reservation: Scalars['ID'];
}>;


export type UnreserveMutation = { __typename?: 'Mutation', unreserve: { __typename?: 'Reservation', id: string } };

export type AssignationsQueryVariables = Exact<{
  instanceId: Scalars['InstanceId'];
}>;


export type AssignationsQuery = { __typename?: 'Query', assignations: Array<{ __typename?: 'Assignation', id: string, status: AssignationStatus, args: any, reference?: string | null }> };

export type ConstantNodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ConstantNodeQuery = { __typename?: 'Query', node: { __typename?: 'Node', args: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, scope: PortScope, kind: PortKind, identifier?: any | null, default?: any | null, groups?: Array<string> | null, effects?: Array<{ __typename: 'CustomEffect', kind: string, hook: string, ward: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> } | { __typename: 'MessageEffect', kind: string, message: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null }>, returns: Array<{ __typename: 'Port', key: string, label?: string | null, nullable: boolean, description?: string | null, scope: PortScope, kind: PortKind, identifier?: any | null, default?: any | null, groups?: Array<string> | null, effects?: Array<{ __typename: 'CustomEffect', kind: string, hook: string, ward: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> } | { __typename: 'MessageEffect', kind: string, message: string, dependencies: Array<{ __typename?: 'EffectDependency', key: string, condition: LogicalCondition, value: string }> }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, nullable: boolean, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, child?: { __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null } | null, variants?: Array<{ __typename?: 'ChildPort', kind: PortKind, identifier?: any | null, scope: PortScope, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null, assignWidget?: { __typename: 'ChoiceAssignWidget', kind: AssignWidgetKind, choices?: Array<{ __typename?: 'Choice', value: string, label: string, description?: string | null }> | null } | { __typename: 'CustomAssignWidget', kind: AssignWidgetKind, ward: string, hook: string } | { __typename: 'SearchAssignWidget', kind: AssignWidgetKind, query: string, ward: string } | { __typename: 'SliderAssignWidget', kind: AssignWidgetKind, min?: number | null, max?: number | null } | { __typename: 'StringAssignWidget', kind: AssignWidgetKind, placeholder: string, asParagraph: boolean } | null, returnWidget?: { __typename: 'ChoiceReturnWidget', kind: ReturnWidgetKind, choices?: Array<{ __typename?: 'Choice', label: string, value: string, description?: string | null }> | null } | { __typename: 'CustomReturnWidget', kind: ReturnWidgetKind, hook: string, ward: string } | null }> | null }>, portGroups: Array<{ __typename?: 'PortGroup', key: string, hidden: boolean }> } };

export type ReservationsQueryVariables = Exact<{
  instanceId: Scalars['InstanceId'];
}>;


export type ReservationsQuery = { __typename?: 'Query', reservations: Array<{ __typename?: 'Reservation', title?: string | null, status: ReservationStatus, id: string, reference: string }> };

export type WatchAssignationsSubscriptionVariables = Exact<{
  instanceId: Scalars['InstanceId'];
}>;


export type WatchAssignationsSubscription = { __typename?: 'Subscription', assignations: { __typename?: 'AssignationEvent', id: string, kind: AssignationEventKind, level: LogLevel, returns: any, createdAt: any, assignation: { __typename?: 'Assignation', id: string } } };

export type WatchReservationsSubscriptionVariables = Exact<{
  instanceId: Scalars['InstanceId'];
}>;


export type WatchReservationsSubscription = { __typename?: 'Subscription', reservations: { __typename?: 'ReservationEvent', id: string, kind: ReservationEventKind, level: LogLevel, createdAt: any, reservation: { __typename?: 'Reservation', id: string } } };

export const PostmanAssignationFragmentDoc = gql`
    fragment PostmanAssignation on Assignation {
  id
  status
  args
  reference
}
    `;
export const AssignationEventFragmentDoc = gql`
    fragment AssignationEvent on AssignationEvent {
  id
  kind
  level
  returns
  assignation {
    id
  }
  createdAt
}
    `;
export const EffectDependencyFragmentDoc = gql`
    fragment EffectDependency on EffectDependency {
  key
  condition
  value
}
    `;
export const CustomEffectFragmentDoc = gql`
    fragment CustomEffect on CustomEffect {
  __typename
  kind
  hook
  ward
}
    `;
export const MessageEffectFragmentDoc = gql`
    fragment MessageEffect on MessageEffect {
  __typename
  kind
  message
}
    `;
export const PortEffectFragmentDoc = gql`
    fragment PortEffect on Effect {
  __typename
  kind
  dependencies {
    ...EffectDependency
  }
  ...CustomEffect
  ...MessageEffect
}
    ${EffectDependencyFragmentDoc}
${CustomEffectFragmentDoc}
${MessageEffectFragmentDoc}`;
export const StringAssignWidgetFragmentDoc = gql`
    fragment StringAssignWidget on StringAssignWidget {
  __typename
  kind
  placeholder
  asParagraph
}
    `;
export const SearchAssignWidgetFragmentDoc = gql`
    fragment SearchAssignWidget on SearchAssignWidget {
  __typename
  kind
  query
  ward
}
    `;
export const SliderAssignWidgetFragmentDoc = gql`
    fragment SliderAssignWidget on SliderAssignWidget {
  __typename
  kind
  min
  max
}
    `;
export const ChoiceAssignWidgetFragmentDoc = gql`
    fragment ChoiceAssignWidget on ChoiceAssignWidget {
  __typename
  kind
  choices {
    value
    label
    description
  }
}
    `;
export const CustomAssignWidgetFragmentDoc = gql`
    fragment CustomAssignWidget on CustomAssignWidget {
  __typename
  ward
  hook
}
    `;
export const AssignWidgetFragmentDoc = gql`
    fragment AssignWidget on AssignWidget {
  __typename
  kind
  ...StringAssignWidget
  ...SearchAssignWidget
  ...SliderAssignWidget
  ...ChoiceAssignWidget
  ...CustomAssignWidget
}
    ${StringAssignWidgetFragmentDoc}
${SearchAssignWidgetFragmentDoc}
${SliderAssignWidgetFragmentDoc}
${ChoiceAssignWidgetFragmentDoc}
${CustomAssignWidgetFragmentDoc}`;
export const CustomReturnWidgetFragmentDoc = gql`
    fragment CustomReturnWidget on CustomReturnWidget {
  __typename
  kind
  hook
  ward
}
    `;
export const ChoiceReturnWidgetFragmentDoc = gql`
    fragment ChoiceReturnWidget on ChoiceReturnWidget {
  __typename
  choices {
    label
    value
    description
  }
}
    `;
export const ReturnWidgetFragmentDoc = gql`
    fragment ReturnWidget on ReturnWidget {
  __typename
  kind
  ...CustomReturnWidget
  ...ChoiceReturnWidget
}
    ${CustomReturnWidgetFragmentDoc}
${ChoiceReturnWidgetFragmentDoc}`;
export const ChildPortNestedFragmentDoc = gql`
    fragment ChildPortNested on ChildPort {
  kind
  identifier
  child {
    kind
    identifier
    scope
    assignWidget {
      ...AssignWidget
    }
    returnWidget {
      ...ReturnWidget
    }
  }
  variants {
    kind
    identifier
    scope
    assignWidget {
      ...AssignWidget
    }
    returnWidget {
      ...ReturnWidget
    }
  }
  scope
  assignWidget {
    ...AssignWidget
  }
  returnWidget {
    ...ReturnWidget
  }
}
    ${AssignWidgetFragmentDoc}
${ReturnWidgetFragmentDoc}`;
export const ChildPortFragmentDoc = gql`
    fragment ChildPort on ChildPort {
  kind
  identifier
  scope
  child {
    ...ChildPortNested
  }
  variants {
    ...ChildPortNested
  }
  assignWidget {
    ...AssignWidget
  }
  returnWidget {
    ...ReturnWidget
  }
  nullable
}
    ${ChildPortNestedFragmentDoc}
${AssignWidgetFragmentDoc}
${ReturnWidgetFragmentDoc}`;
export const PortFragmentDoc = gql`
    fragment Port on Port {
  __typename
  key
  label
  nullable
  description
  scope
  effects {
    ...PortEffect
  }
  assignWidget {
    ...AssignWidget
  }
  returnWidget {
    ...ReturnWidget
  }
  kind
  identifier
  child {
    ...ChildPort
  }
  variants {
    ...ChildPort
  }
  default
  nullable
  groups
}
    ${PortEffectFragmentDoc}
${AssignWidgetFragmentDoc}
${ReturnWidgetFragmentDoc}
${ChildPortFragmentDoc}`;
export const PortGroupFragmentDoc = gql`
    fragment PortGroup on PortGroup {
  key
  hidden
}
    `;
export const PortsFragmentDoc = gql`
    fragment Ports on Node {
  args {
    ...Port
  }
  returns {
    ...Port
  }
  portGroups {
    ...PortGroup
  }
}
    ${PortFragmentDoc}
${PortGroupFragmentDoc}`;
export const PostmanReservationFragmentDoc = gql`
    fragment PostmanReservation on Reservation {
  title
  status
  id
  reference
}
    `;
export const ReservationEventFragmentDoc = gql`
    fragment ReservationEvent on ReservationEvent {
  id
  kind
  level
  reservation {
    id
  }
  createdAt
}
    `;
export const AcknowledgeDocument = gql`
    mutation Acknowledge($assignation: ID!) {
  ack(input: {assignation: $assignation}) {
    ...PostmanAssignation
  }
}
    ${PostmanAssignationFragmentDoc}`;
export type AcknowledgeMutationFn = Apollo.MutationFunction<AcknowledgeMutation, AcknowledgeMutationVariables>;

/**
 * __useAcknowledgeMutation__
 *
 * To run a mutation, you first call `useAcknowledgeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcknowledgeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acknowledgeMutation, { data, loading, error }] = useAcknowledgeMutation({
 *   variables: {
 *      assignation: // value for 'assignation'
 *   },
 * });
 */
export function useAcknowledgeMutation(baseOptions?: Apollo.MutationHookOptions<AcknowledgeMutation, AcknowledgeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcknowledgeMutation, AcknowledgeMutationVariables>(AcknowledgeDocument, options);
      }
export type AcknowledgeMutationHookResult = ReturnType<typeof useAcknowledgeMutation>;
export type AcknowledgeMutationResult = Apollo.MutationResult<AcknowledgeMutation>;
export type AcknowledgeMutationOptions = Apollo.BaseMutationOptions<AcknowledgeMutation, AcknowledgeMutationVariables>;
export const AssignDocument = gql`
    mutation Assign($reservation: ID!, $args: [Arg!]!) {
  assign(input: {reservation: $reservation, args: $args}) {
    ...PostmanAssignation
  }
}
    ${PostmanAssignationFragmentDoc}`;
export type AssignMutationFn = Apollo.MutationFunction<AssignMutation, AssignMutationVariables>;

/**
 * __useAssignMutation__
 *
 * To run a mutation, you first call `useAssignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignMutation, { data, loading, error }] = useAssignMutation({
 *   variables: {
 *      reservation: // value for 'reservation'
 *      args: // value for 'args'
 *   },
 * });
 */
export function useAssignMutation(baseOptions?: Apollo.MutationHookOptions<AssignMutation, AssignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AssignMutation, AssignMutationVariables>(AssignDocument, options);
      }
export type AssignMutationHookResult = ReturnType<typeof useAssignMutation>;
export type AssignMutationResult = Apollo.MutationResult<AssignMutation>;
export type AssignMutationOptions = Apollo.BaseMutationOptions<AssignMutation, AssignMutationVariables>;
export const ReserveDocument = gql`
    mutation Reserve($instanceId: InstanceId!, $node: ID, $hash: NodeHash, $template: ID, $binds: BindsInput, $title: String) {
  reserve(
    input: {instanceId: $instanceId, node: $node, template: $template, hash: $hash, binds: $binds, title: $title}
  ) {
    ...PostmanReservation
  }
}
    ${PostmanReservationFragmentDoc}`;
export type ReserveMutationFn = Apollo.MutationFunction<ReserveMutation, ReserveMutationVariables>;

/**
 * __useReserveMutation__
 *
 * To run a mutation, you first call `useReserveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReserveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reserveMutation, { data, loading, error }] = useReserveMutation({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *      node: // value for 'node'
 *      hash: // value for 'hash'
 *      template: // value for 'template'
 *      binds: // value for 'binds'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useReserveMutation(baseOptions?: Apollo.MutationHookOptions<ReserveMutation, ReserveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReserveMutation, ReserveMutationVariables>(ReserveDocument, options);
      }
export type ReserveMutationHookResult = ReturnType<typeof useReserveMutation>;
export type ReserveMutationResult = Apollo.MutationResult<ReserveMutation>;
export type ReserveMutationOptions = Apollo.BaseMutationOptions<ReserveMutation, ReserveMutationVariables>;
export const UnassignDocument = gql`
    mutation Unassign($assignation: ID!) {
  unassign(input: {assignation: $assignation}) {
    id
  }
}
    `;
export type UnassignMutationFn = Apollo.MutationFunction<UnassignMutation, UnassignMutationVariables>;

/**
 * __useUnassignMutation__
 *
 * To run a mutation, you first call `useUnassignMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnassignMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unassignMutation, { data, loading, error }] = useUnassignMutation({
 *   variables: {
 *      assignation: // value for 'assignation'
 *   },
 * });
 */
export function useUnassignMutation(baseOptions?: Apollo.MutationHookOptions<UnassignMutation, UnassignMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnassignMutation, UnassignMutationVariables>(UnassignDocument, options);
      }
export type UnassignMutationHookResult = ReturnType<typeof useUnassignMutation>;
export type UnassignMutationResult = Apollo.MutationResult<UnassignMutation>;
export type UnassignMutationOptions = Apollo.BaseMutationOptions<UnassignMutation, UnassignMutationVariables>;
export const UnreserveDocument = gql`
    mutation Unreserve($reservation: ID!) {
  unreserve(input: {reservation: $reservation}) {
    id
  }
}
    `;
export type UnreserveMutationFn = Apollo.MutationFunction<UnreserveMutation, UnreserveMutationVariables>;

/**
 * __useUnreserveMutation__
 *
 * To run a mutation, you first call `useUnreserveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnreserveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unreserveMutation, { data, loading, error }] = useUnreserveMutation({
 *   variables: {
 *      reservation: // value for 'reservation'
 *   },
 * });
 */
export function useUnreserveMutation(baseOptions?: Apollo.MutationHookOptions<UnreserveMutation, UnreserveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnreserveMutation, UnreserveMutationVariables>(UnreserveDocument, options);
      }
export type UnreserveMutationHookResult = ReturnType<typeof useUnreserveMutation>;
export type UnreserveMutationResult = Apollo.MutationResult<UnreserveMutation>;
export type UnreserveMutationOptions = Apollo.BaseMutationOptions<UnreserveMutation, UnreserveMutationVariables>;
export const AssignationsDocument = gql`
    query Assignations($instanceId: InstanceId!) {
  assignations(
    filters: {status: [DONE, CRITICAL, CANCELLED], reservation: {waiter: {instanceId: $instanceId}}}
  ) {
    ...PostmanAssignation
  }
}
    ${PostmanAssignationFragmentDoc}`;

/**
 * __useAssignationsQuery__
 *
 * To run a query within a React component, call `useAssignationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssignationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssignationsQuery({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *   },
 * });
 */
export function useAssignationsQuery(baseOptions: Apollo.QueryHookOptions<AssignationsQuery, AssignationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AssignationsQuery, AssignationsQueryVariables>(AssignationsDocument, options);
      }
export function useAssignationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AssignationsQuery, AssignationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AssignationsQuery, AssignationsQueryVariables>(AssignationsDocument, options);
        }
export type AssignationsQueryHookResult = ReturnType<typeof useAssignationsQuery>;
export type AssignationsLazyQueryHookResult = ReturnType<typeof useAssignationsLazyQuery>;
export type AssignationsQueryResult = Apollo.QueryResult<AssignationsQuery, AssignationsQueryVariables>;
export const ConstantNodeDocument = gql`
    query ConstantNode($id: ID!) {
  node(id: $id) {
    ...Ports
  }
}
    ${PortsFragmentDoc}`;

/**
 * __useConstantNodeQuery__
 *
 * To run a query within a React component, call `useConstantNodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useConstantNodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConstantNodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConstantNodeQuery(baseOptions: Apollo.QueryHookOptions<ConstantNodeQuery, ConstantNodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConstantNodeQuery, ConstantNodeQueryVariables>(ConstantNodeDocument, options);
      }
export function useConstantNodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConstantNodeQuery, ConstantNodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConstantNodeQuery, ConstantNodeQueryVariables>(ConstantNodeDocument, options);
        }
export type ConstantNodeQueryHookResult = ReturnType<typeof useConstantNodeQuery>;
export type ConstantNodeLazyQueryHookResult = ReturnType<typeof useConstantNodeLazyQuery>;
export type ConstantNodeQueryResult = Apollo.QueryResult<ConstantNodeQuery, ConstantNodeQueryVariables>;
export const ReservationsDocument = gql`
    query Reservations($instanceId: InstanceId!) {
  reservations(filters: {status: [ENDED], waiter: {instanceId: $instanceId}}) {
    ...PostmanReservation
  }
}
    ${PostmanReservationFragmentDoc}`;

/**
 * __useReservationsQuery__
 *
 * To run a query within a React component, call `useReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationsQuery({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *   },
 * });
 */
export function useReservationsQuery(baseOptions: Apollo.QueryHookOptions<ReservationsQuery, ReservationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReservationsQuery, ReservationsQueryVariables>(ReservationsDocument, options);
      }
export function useReservationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReservationsQuery, ReservationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReservationsQuery, ReservationsQueryVariables>(ReservationsDocument, options);
        }
export type ReservationsQueryHookResult = ReturnType<typeof useReservationsQuery>;
export type ReservationsLazyQueryHookResult = ReturnType<typeof useReservationsLazyQuery>;
export type ReservationsQueryResult = Apollo.QueryResult<ReservationsQuery, ReservationsQueryVariables>;
export const WatchAssignationsDocument = gql`
    subscription WatchAssignations($instanceId: InstanceId!) {
  assignations(instanceId: $instanceId) {
    ...AssignationEvent
  }
}
    ${AssignationEventFragmentDoc}`;

/**
 * __useWatchAssignationsSubscription__
 *
 * To run a query within a React component, call `useWatchAssignationsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchAssignationsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchAssignationsSubscription({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *   },
 * });
 */
export function useWatchAssignationsSubscription(baseOptions: Apollo.SubscriptionHookOptions<WatchAssignationsSubscription, WatchAssignationsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<WatchAssignationsSubscription, WatchAssignationsSubscriptionVariables>(WatchAssignationsDocument, options);
      }
export type WatchAssignationsSubscriptionHookResult = ReturnType<typeof useWatchAssignationsSubscription>;
export type WatchAssignationsSubscriptionResult = Apollo.SubscriptionResult<WatchAssignationsSubscription>;
export const WatchReservationsDocument = gql`
    subscription WatchReservations($instanceId: InstanceId!) {
  reservations(instanceId: $instanceId) {
    ...ReservationEvent
  }
}
    ${ReservationEventFragmentDoc}`;

/**
 * __useWatchReservationsSubscription__
 *
 * To run a query within a React component, call `useWatchReservationsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchReservationsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchReservationsSubscription({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *   },
 * });
 */
export function useWatchReservationsSubscription(baseOptions: Apollo.SubscriptionHookOptions<WatchReservationsSubscription, WatchReservationsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<WatchReservationsSubscription, WatchReservationsSubscriptionVariables>(WatchReservationsDocument, options);
      }
export type WatchReservationsSubscriptionHookResult = ReturnType<typeof useWatchReservationsSubscription>;
export type WatchReservationsSubscriptionResult = Apollo.SubscriptionResult<WatchReservationsSubscription>;