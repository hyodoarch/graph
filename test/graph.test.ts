import { describe, expect, it } from "vitest";
import Graph from "../src/components/Graph";

describe("Graph Component", () => {
  it("should create a Graph component with default options", () => {
    const component = Graph({});

    expect(component).toBeDefined();
    expect(typeof component).toBe("function");
  });

  it("should create a Graph component with custom options", () => {
    const component = Graph({
      localGraph: {
        depth: 2,
        drag: false,
        zoom: true,
      },
      globalGraph: {
        depth: -1,
        focusOnHover: true,
      },
    });

    expect(component).toBeDefined();
    expect(typeof component).toBe("function");
  });

  it("should export component with css property", () => {
    const component = Graph({});

    expect(component.css).toBeDefined();
    expect(typeof component.css).toBe("string");
  });

  it("should export component with afterDOMLoaded script", () => {
    const component = Graph({});

    expect(component.afterDOMLoaded).toBeDefined();
    expect(typeof component.afterDOMLoaded).toBe("string");
  });
});

describe("Graph Manifest", () => {
  it("should export a valid plugin manifest", async () => {
    const { manifest } = await import("../src/manifest");

    expect(manifest).toBeDefined();
    expect(manifest.name).toBe("@quartz-community/graph");
    expect(manifest.version).toBeDefined();
    expect(manifest.components).toBeDefined();
    expect(typeof manifest.components).toBe("object");
    const graphComponent = manifest.components?.Graph;
    expect(graphComponent).toBeDefined();
    expect(graphComponent?.name).toBe("Graph");
  });
});
