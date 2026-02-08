export {};

declare module "@quartz-community/types" {
  export interface D3Config {
    drag: boolean;
    zoom: boolean;
    depth: number;
    scale: number;
    repelForce: number;
    centerForce: number;
    linkDistance: number;
    fontSize: number;
    opacityScale: number;
    removeTags: string[];
    showTags: boolean;
    focusOnHover?: boolean;
    enableRadial?: boolean;
  }

  export interface GraphOptions {
    localGraph?: Partial<D3Config>;
    globalGraph?: Partial<D3Config>;
  }
}
