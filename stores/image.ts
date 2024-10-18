import { defineStore } from "pinia";

export const useMyImageStore = defineStore({
  id: "myImageStore",
  state: () => ({
    options: ["upload", "internet", "base64"],
    onSelected: "upload",
  }),
  actions: {
    getOptions() {
      return this.options;
    },
    getSelected() {
      return this.onSelected;
    },
    setSelected(value: string) {
      this.onSelected = value;
    },
  },
});
