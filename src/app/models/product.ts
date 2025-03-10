export interface Product {
    id: string;  // Must be unique and 3-10 characters
    nombre: string;  // 5-100 characters
    descripcion: string;  // 10-200 characters
    logo: string;  // URL or base64
    fechaLiberacion: Date;  // Must be today or later
    fechaRevision: Date;  // Exactly one year after release
  }
  