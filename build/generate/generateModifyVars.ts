/**
 * scss global variable
 */
export function generateModifyVars() {
  return {
    // Used for global import to avoid the need to import each style file separately
    // reference:  Avoid repeated references
    'success-color': '#55D187', //  Success color
    'error-color': '#ED6F6F', //  False color
    'warning-color': '#EFBD47', //   Warning color
    'border-color-base': '#EEEEEE',
    'font-size-base': '14px', //  Main font size
    'border-radius-base': '2px', //  Component/float fillet
    'app-content-background': '#fafafa', //   Link color
  }
}
