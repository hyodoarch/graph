import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import { i18n } from "../i18n";
import style from "./styles/graph.scss";
// @ts-ignore
import script from "./scripts/graph.inline.ts";

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

const defaultOptions = {
  localGraph: {
    drag: true,
    zoom: true,
    depth: 1,
    scale: 1.1,
    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: true,
    removeTags: [] as string[],
    focusOnHover: false,
    enableRadial: false,
  },
  globalGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 0.9,
    repelForce: 0.5,
    centerForce: 0.2,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    showTags: true,
    removeTags: [] as string[],
    focusOnHover: true,
    enableRadial: true,
  },
};

export default ((userOpts?: Partial<GraphOptions>) => {
  const Graph: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const localGraph = { ...defaultOptions.localGraph, ...userOpts?.localGraph };
    const globalGraph = { ...defaultOptions.globalGraph, ...userOpts?.globalGraph };

    return (
      <div class={classNames(displayClass, "graph")}>
        <div class="graph-outer" id="graph-container">
          <div class="graph-container" data-cfg={JSON.stringify(localGraph)}></div>
          <button class="global-graph-icon" aria-label="Global Graph">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 55 55"
              fill="currentColor"
              xmlSpace="preserve"
            >
              <path
                d="M49,0c-3.309,0-6,2.691-6,6c0,1.035,0.263,2.009,0.726,2.86l-9.829,9.829C32.542,17.634,30.846,17,29,17
                c-3.313,0-6,2.687-6,6c0,0.753,0.149,1.469,0.401,2.138l-9.913,6.062C12.656,30.878,11.354,30.5,10,30.5
                c-3.313,0-6,2.687-6,6c0,3.313,2.687,6,6,6c1.355,0,2.657-0.378,3.79-1.029l9.729,6.041C23.337,48.031,23.17,48.5,23,48.5
                c-3.313,0-6,2.687-6,6s2.687,6,6,6s6-2.687,6-6c0-1.027-0.262-1.991-0.72-2.839l9.865-6.068
                C38.655,31.878,39.957,32.5,41.5,32.5c3.313,0,6-2.687,6-6c0-1.389-0.475-2.663-1.268-3.684l9.834-9.834
                C57.091,13.12,58,13.5,59,13.5c3.313,0,6-2.687,6-6S62.313,1.5,59,1.5S53,4.187,53,7.5c0,0.818,0.135,1.605,0.38,2.342
                L43.75,19.422C42.534,18.538,41.066,18,39.5,18c-3.313,0-6,2.687-6,6c0,0.639,0.108,1.252,0.304,1.826l-9.49,5.805
                C23.639,31.237,22.859,31,22,31c-3.313,0-6,2.687-6,6s2.687,6,6,6c0.859,0,1.639-0.237,2.314-0.631l9.49,5.805
                C33.892,43.748,34,44.361,34,45c0,3.313,2.687,6,6,6c1.566,0,3.034-0.538,4.25-1.422l9.63,9.63
                C53.865,59.895,54,60.682,54,61.5c0,3.313,2.687,6,6,6s6-2.687,6-6S63.313,55.5,60,55.5z"
              />
            </svg>
          </button>
        </div>
        <div class="global-graph-outer" id="global-graph-container">
          <div class="global-graph-container" data-cfg={JSON.stringify(globalGraph)}></div>
        </div>
      </div>
    );
  };

  Graph.css = style;
  Graph.afterDOMLoaded = script;

  return Graph;
}) satisfies QuartzComponentConstructor;
