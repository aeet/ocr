import { defineStore } from "pinia";

export type ImageMeta = {
  id: string;
  data: string;
  type: ImageType;
};

export type ImageType = "upload" | "internet" | "base64";

export type ImageStoreState = {
  options: ImageType[];
  onSelected: ImageType;
  currentImage: ImageMeta;
  images: ImageMeta[];
};

export const useMyImageStore = defineStore<
  "myImageStore",
  Partial<ImageStoreState>,
  any,
  any
>({
  id: "myImageStore",
  state: () => ({
    options: ["upload", "internet", "base64"],
    onSelected: "upload",
    images: [],
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
    getImages() {
      return this.images;
    },
    addImage(image: ImageMeta) {
      this.images.push(image);
    },
    addImages(images: ImageMeta[]) {
      this.images = this.images.concat(images); 
    },
    removeImage(image: ImageMeta) {
      this.images = this.images.filter((i: ImageMeta) => i.id !== image.id);
    },
  },
});
