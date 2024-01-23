import { ReactRenderer } from "@tiptap/react";
import { PluginKey } from "@tiptap/pm/state";
import tippy from "tippy.js";

import MentionList from "../../../components/mention-list/MentionList";

const organizationSuggestions = (extensionName: string) => {
  const OrganizationMentionPluginKey = new PluginKey(extensionName);

  return {
    char: "!",
    pluginKey: OrganizationMentionPluginKey,
    items: ({ query }: any) => {
      return [
        "Tech Innovators Inc.",
        "Global Solutions Co.",
        "Data Dynamics Ltd.",
        "Future Trends Corp.",
        "Infinite Technologies",
        "Alpha Systems Group",
        "Digital Dynamics LLC",
        "InnovateX Solutions",
        "Quantum Enterprises",
        "Pinnacle Innovations",
        "Stratosphere Technologies",
        "NexGen Innovations",
        "Visionary Ventures Inc.",
        "Cybernetic Systems",
        "InnovateHub Solutions",
        "Synergy Innovations",
        "Epic Technologies Ltd.",
        "MegaByte Solutions",
        "EcoTech Ventures",
        "Summit Solutions Co.",
        "Dynamic Data Systems",
        "Global Innovators Ltd.",
        "FutureGen Technologies",
        "Polaris Dynamics Inc.",
        "Quantum Leap Ventures",
        "TechVantage Solutions",
        "InnoScape Corp.",
        "Synthwave Technologies",
        "Omega Innovations Ltd.",
        "Horizon Dynamics Inc.",
        "StriveTech Ventures",
        "TechSavvy Solutions",
        "Apex Innovators Co.",
        "BlueSky Technologies",
        "Virtuoso Ventures Inc.",
        "TechVision Dynamics",
        "SmartSolutions Ltd.",
        "InnoSphere Technologies",
        "EagleEye Innovations",
        "DataDriven Dynamics",
        "Nebula Innovators Inc.",
        "FusionTech Ventures",
        "Rapid Innovations Co.",
        "NexSys Technologies",
        "Starlight Solutions Ltd.",
        "GlobalSynergy Ventures",
        "IntelliTech Innovations",
        "Spectra Dynamics Inc.",
        "InnovateWave Solutions",
        "Momentum Innovators",
        "TechPulse Ventures",
        "NexWave Technologies",
        "Strategic Innovations Co.",
        "InnoSys Solutions",
        "VistaTech Ventures",
        "Dynamic Horizons Inc.",
        "Quantum Synergy Technologies",
        "OptiTech Innovations",
        "EcoSolutions Co.",
        "Infinite Innovations Ltd.",
        "TechMinds Dynamics",
        "Swift Solutions Inc.",
        "InnovateGlobe Ventures",
        "FutureTech Innovations",
        "NexGen Solutions Co.",
        "EcoSavvy Dynamics",
        "Alpha Innovations Inc.",
        "TechNest Solutions",
        "SynthTech Ventures",
        "Quantum Dynamics Ltd.",
        "Stratos Innovations",
        "FutureScape Technologies",
        "InnoWorks Ventures",
        "Vista Innovators Inc.",
        "TechPinnacle Dynamics",
        "Synergetic Solutions",
        "DigitalDream Innovations",
        "EcoVision Ventures",
        "NexSphere Technologies",
        "MegaTech Innovations",
        "Infinite Ventures Inc.",
        "DynamicScape Solutions",
        "QuantumSavvy Technologies",
        "TechVista Innovations",
        "FuturePulse Ventures",
        "Synergy Dynamics Co.",
        "InnoHorizon Solutions",
        "Virtuoso Innovations Ltd.",
        "Alpha Dynamics Inc.",
        "EcoSynergy Ventures",
        "GlobalScape Technologies",
        "StriveTech Innovations",
        "TechSynergy Solutions",
        "NexGen Dynamics Co.",
        "InnovateMinds Ventures",
        "DynamicWave Innovations",
        "EcoStrive Technologies",
        "QuantumPulse Ventures",
        "MegaInnovations Solutions",
        "TechHorizon Dynamics",
        "SynergySphere Innovations",
      ]
        .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 5);
    },

    render: () => {
      let component: ReactRenderer;
      let popup: any;

      return {
        onStart: (props: any) => {
          component = new ReactRenderer(MentionList, {
            props,
            editor: props.editor,
          });

          if (!props.clientRect) {
            return;
          }

          popup = tippy("body", {
            getReferenceClientRect: props.clientRect,
            appendTo: () => document.body,
            content: component.element,
            showOnCreate: true,
            interactive: true,
            trigger: "manual",
            placement: "bottom-start",
          });
        },

        onUpdate(props: any) {
          component.updateProps(props);

          if (!props.clientRect) {
            return;
          }

          popup[0].setProps({
            getReferenceClientRect: props.clientRect,
          });
        },

        onKeyDown(props: any) {
          if (props.event.key === "Escape") {
            popup[0].hide();

            return true;
          }

          return (component.ref as any)?.onKeyDown(props);
        },

        onExit() {
          popup[0].destroy();
          component.destroy();
        },
      };
    },
  };
};

export default organizationSuggestions;
