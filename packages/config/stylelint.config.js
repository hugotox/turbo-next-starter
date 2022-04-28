module.exports = {
  extends: [
    "@giotramu/stylelint-config",
    "@giotramu/stylelint-config/styled",
    "@giotramu/stylelint-config/prettier",
  ],
  rules: {
    "value-no-vendor-prefix": null,
    "property-no-unknown": null,
    "color-hex-alpha": null,
  },
};
