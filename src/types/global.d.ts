export { }
import { CostType } from '.'

declare global {

  enum MimeTypes {
    ".aac" = "audio/aac",
    ".abw" = "application/x-abiword",
    ".arc" = "application/x-freearc",
    ".avi" = "video/x-msvideo",
    ".azw" = "application/vnd.amazon.ebook",
    ".bin" = "application/octet-stream",
    ".bmp" = "image/bmp",
    ".bz" = "application/x-bzip",
    ".bz2" = "application/x-bzip2",
    ".csh" = "application/x-csh",
    ".css" = "text/css",
    ".csv" = "text/csv",
    ".doc" = "application/msword",
    ".docx" = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".eot" = "application/vnd.ms-fontobject",
    ".epub" = "application/epub+zip",
    ".gz" = "application/gzip",
    ".gif" = "image/gif",
    ".htm" = "text/html",
    ".html" = "text/html",
    ".ico" = "image/vnd.microsoft.icon",
    ".ics" = "text/calendar",
    ".jar" = "application/java-archive",
    ".jpeg" = ".jpg",
    ".js" = "text/javascript",
    ".json" = "application/json",
    ".jsonld" = "application/ld+json",
    ".mid" = ".midi",
    ".mjs" = "text/javascript",
    ".mp3" = "audio/mpeg",
    ".mpeg" = "video/mpeg",
    ".mpkg" = "application/vnd.apple.installer+xml",
    ".odp" = "application/vnd.oasis.opendocument.presentation",
    ".ods" = "application/vnd.oasis.opendocument.spreadsheet",
    ".odt" = "application/vnd.oasis.opendocument.text",
    ".oga" = "audio/ogg",
    ".ogv" = "video/ogg",
    ".ogx" = "application/ogg",
    ".opus" = "audio/opus",
    ".otf" = "font/otf",
    ".png" = "image/png",
    ".pdf" = "application/pdf",
    ".php" = "application/php",
    ".ppt" = "application/vnd.ms-powerpoint",
    ".pptx" = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".rar" = "application/vnd.rar",
    ".rtf" = "application/rtf",
    ".sh" = "application/x-sh",
    ".svg" = "image/svg+xml",
    ".swf" = "application/x-shockwave-flash",
    ".tar" = "application/x-tar",
    ".tif" = "image/tiff",
    ".tiff" = "image/tiff",
    ".ts" = "video/mp2t",
    ".ttf" = "font/ttf",
    ".txt" = "text/plain",
    ".vsd" = "application/vnd.visio",
    ".wav" = "audio/wav",
    ".weba" = "audio/webm",
    ".webm" = "video/webm",
    ".webp" = "image/webp",
    ".woff" = "font/woff",
    ".woff2" = "font/woff2",
    ".xhtml" = "application/xhtml+xml",
    ".xls" = "application/vnd.ms-excel",
    ".xlsx" = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".xml" = "XML",
    ".xul" = "application/vnd.mozilla.xul+xml",
    ".zip" = "application/zip",
    ".3gp" = "video/3gpp",
    ".3g2" = "video/3gpp2",
    ".7z" = "application/x-7z-compressed"
  }

  interface SingleCostComponent {
    __component: CostsTypes.SINGLE,
    id: number
    cost: number
    single_cost: {
      id: number
      Title: string
      createdAt: string,
      updatedAt: string
    }
  }

  interface PluralCostComponent {
    __component: CostsTypes.PLURAL
    id: number,
    Quantity: number,
    plural_cost: {
      id: number,
      Title: string,
      createdAt: string,
      updatedAt: string,
      unit_price: number
    }
  }


  enum ImageSizes {
    LARGE = "large",
    THUMB = "thumbnail",
    MEDIUM = "medium",
    SMALL = "small"
  }

  type ImageFormats = {
    [key in ImageSizes]: {
      name: string,
      hash: string,
      ext: string,
      mime: MimeTypes,
      path: null,
      width: number,
      height: number,
      size: number,
      url: string
    }
  }

  interface File {
    id: number,
    name: string,
    alternativeText: string | null,
    caption: string | null,
    width: null | number,
    height: null | number,
    formats: null | ImageFormats,
    hash: string,
    ext: string,
    mime: MimeTypes,
    size: number,
    url: string,
    previewUrl: null,
    provider: string,
    provider_metadata: null,
    createdAt: string,
    updatedAt: string
  }

  type costsTypes = SingleCostComponent | PluralCostComponent

  interface Product {
    id: number,
    Title: string,
    Description: string,
    createdAt: string,
    updatedAt: string,
    featured_image: File | none,
    Costs: costsTypes[]
  }

  interface ProductList {
    id: number,
    list_title: string,
    profit_percent: 25,
    createdAt: string,
    updatedAt: string,
    description: string | null,
    protected: boolean,
    slug: string,
    products: Product[]
  }
}