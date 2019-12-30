export interface LinkTestModel {
  id              : string;
  name            : string;
  price           : string;
  averageTat      : string;
  isOutSourced    : boolean;
  isExpanded      : boolean;
  sample          : SampleModel;
  container       : ContainerModel;
  tests           : LinkTestModel[];
}

interface SampleModel {
  id: string;
  name: string;
}

interface ContainerModel {
  id: string;
  name: string;
}

