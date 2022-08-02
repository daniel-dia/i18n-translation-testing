import { createLocalVue, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import VueI18n from "vue-i18n";
import { en } from "@/assets/lang/en";

describe("HelloWorld.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueI18n);
  const i18n = new VueI18n({ locale: "pt", messages: { pt: en } });

  beforeEach(() => {
    jest.resetAllMocks().spyOn(console, "warn");
  });

  afterEach(() => {
    expect(console.warn).not.toBeCalledWith(expect.stringMatching(/\[vue-i18n\] Cannot translate the value of keypath/gm));
  });

  it("should say 'good morning' when its 9 o'clock", () => {
    shallowMount(HelloWorld, { i18n, localVue, propsData: { hour: 9 } });
  });

  it("should say 'good afternoon' when its 13 o'clock", () => { // afternoooooon misspelled, should fail
    shallowMount(HelloWorld, { i18n, localVue, propsData: { hour: 13 } });
  });
});
