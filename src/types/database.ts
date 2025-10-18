export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          user_id: string;
          email: string;
          role: 'admin' | 'user';
          created_at: string;
        };
        Insert: {
          user_id: string;
          email: string;
          role?: 'admin' | 'user';
          created_at?: string;
        };
        Update: {
          user_id?: string;
          email?: string;
          role?: 'admin' | 'user';
          created_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          price_cents: number;
          image_url: string | null;
          category: string | null;
          unit: string | null;
          source: string | null;
          in_stock: boolean;
          benefits: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          price_cents: number;
          image_url?: string | null;
          category?: string | null;
          unit?: string | null;
          source?: string | null;
          in_stock?: boolean;
          benefits?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          price_cents?: number;
          image_url?: string | null;
          category?: string | null;
          unit?: string | null;
          source?: string | null;
          in_stock?: boolean;
          benefits?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}

export type Product = Database['public']['Tables']['products']['Row'];
export type ProductInsert = Database['public']['Tables']['products']['Insert'];
export type ProductUpdate = Database['public']['Tables']['products']['Update'];
export type Profile = Database['public']['Tables']['profiles']['Row'];
