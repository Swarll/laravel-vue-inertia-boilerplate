// HeadlessUI Global Configuration and Styles
// This file provides centralized styling for HeadlessUI components

export const headlessUIConfig = {
  // Button variants
  button: {
    base: 'cursor-pointer inline-flex items-center justify-center rounded-lg border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
    sizes: {
      xs: 'p-4.5 py-1.5 text-xs gap-1',
      sm: 'px-3 py-2 text-sm leading-4 gap-1.5',
      md: 'px-4 py-2 text-sm gap-2',
      lg: 'px-4 py-3 text-base gap-2',
      xl: 'px-6 py-3 text-lg gap-2.5'
    },
    variants: {
      primary: 'bg-primary text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm hover:shadow-md',
      accent: 'bg-accent text-white hover:bg-accent-700 focus:ring-accent-500 shadow-sm hover:shadow-md',
      secondary: 'bg-secondary text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-sm hover:shadow-md',
      success: 'bg-success text-white hover:bg-success-700 focus:ring-success-500 shadow-sm hover:shadow-md',
      danger: 'bg-danger text-white hover:bg-danger-700 focus:ring-danger-500 shadow-sm hover:shadow-md',
      warning: 'bg-warning text-gray-900 hover:bg-warning-600 focus:ring-warning-500 shadow-sm hover:shadow-md',
      info: 'bg-info text-white hover:bg-info-700 focus:ring-info-500 shadow-sm hover:shadow-md',
      outline: 'border-secondary-300 text-secondary-700 bg-white hover:bg-secondary-50 focus:ring-primary-500 shadow-sm hover:shadow-md',
      ghost: 'text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500 hover:text-secondary-900',
      link: 'text-primary hover:text-primary-800 underline-offset-4 hover:underline focus:ring-primary-500'
    }
  },

  // Input variants
  input: {
    base: 'block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm transition-colors duration-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed sm:text-sm',
    sizes: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-3 text-base'
    },
    error: 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500',
    disabled: 'bg-gray-50 text-gray-500 cursor-not-allowed'
  },

  // Card variants
  card: {
    base: 'bg-white overflow-visible border border-gray-200 transition-shadow duration-200',
    variants: {
      default: 'rounded-lg shadow-sm hover:shadow-md',
      elevated: 'rounded-lg shadow-lg hover:shadow-xl',
      flat: 'rounded-lg shadow-none border-0',
      outlined: 'rounded-lg shadow-none border-2'
    }
  },

  // Modal/Dialog variants
  modal: {
    overlay: 'fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40',
    container: 'fixed inset-0 z-50 overflow-y-auto',
    wrapper: 'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0',
    panel: 'relative transform overflow-hidden rounded-lg bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full'
  },

  // Form components
  form: {
    label: 'block text-sm font-medium text-gray-700',
    helpText: 'mt-2 text-sm text-gray-500',
    errorText: 'mt-2 text-sm text-red-600',
    fieldset: 'space-y-4'
  },

  // Navigation
  nav: {
    base: 'bg-white shadow',
    item: 'text-gray-600 hover:text-gray-900 p-4 py-2 rounded-md text-sm font-medium',
    activeItem: 'bg-primary-100 text-primary-700 p-4 py-2 rounded-md text-sm font-medium'
  },

  // Dropdown/Menu
  dropdown: {
    button: 'inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200',
    panel: 'absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none divide-y divide-gray-100',
    item: 'block p-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 cursor-pointer'
  },

  // Tabs
  tabs: {
    list: 'border-b border-gray-200 -mb-px flex space-x-8 overflow-x-auto',
    tab: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-2 p-4 border-b-2 font-medium text-sm transition-colors duration-200 flex-shrink-0',
    activeTab: 'border-blue-500 text-blue-600 whitespace-nowrap py-2 p-4 border-b-2 font-medium text-sm flex-shrink-0',
    panel: 'pt-6'
  },

  // Notification/Alert
  alert: {
    base: 'rounded-lg p-4 border',
    variants: {
      success: 'bg-green-50 border-green-200 text-green-800',
      error: 'bg-red-50 border-red-200 text-red-800',
      warning: 'bg-amber-50 border-amber-200 text-amber-800',
      info: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    icon: {
      success: 'text-green-400',
      error: 'text-red-400',
      warning: 'text-amber-400',
      info: 'text-blue-400'
    },
    title: {
      success: 'text-green-800 font-medium',
      error: 'text-red-800 font-medium',
      warning: 'text-amber-800 font-medium',
      info: 'text-blue-800 font-medium'
    },
    content: {
      success: 'text-green-700',
      error: 'text-red-700',
      warning: 'text-amber-700',
      info: 'text-blue-700'
    }
  },

  // Loading states
  loading: {
    spinner: 'animate-spin rounded-full h-4 w-4 border-b-2 border-current',
    overlay: 'absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center'
  }
}

// Utility function to combine classes
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Utility function to get component styles
export function getComponentStyles(component, variant = 'default', size = 'md') {
  const config = headlessUIConfig[component]
  if (!config) return ''
  
  let classes = config.base || ''
  
  if (config.variants && config.variants[variant]) {
    classes += ' ' + config.variants[variant]
  }
  
  if (config.sizes && config.sizes[size]) {
    classes += ' ' + config.sizes[size]
  }
  
  return classes
}