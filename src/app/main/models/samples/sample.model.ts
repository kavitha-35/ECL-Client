export interface SampleModel {
  id                  : number;
  name                : string;
  accessionId         : number;
  description         : string;
  instruction         : string;
  isPrefix            : boolean;
  sampleType          : SampleType;
  containerType       : ContainerType;
}

interface SampleType {
  id                  : string;
  name                : string;
}

interface ContainerType {
  id                  : string;
  name                : string;
}
