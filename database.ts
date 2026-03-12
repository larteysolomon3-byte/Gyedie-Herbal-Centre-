export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          role: 'admin' | 'doctor' | 'receptionist';
          phone: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          role: 'admin' | 'doctor' | 'receptionist';
          phone?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          role?: 'admin' | 'doctor' | 'receptionist';
          phone?: string | null;
          created_at?: string;
        };
      };
      patients: {
        Row: {
          id: string;
          patient_id: string;
          full_name: string;
          age: number;
          gender: 'male' | 'female' | 'other';
          phone: string;
          address: string | null;
          medical_history: string | null;
          allergies: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          patient_id: string;
          full_name: string;
          age: number;
          gender: 'male' | 'female' | 'other';
          phone: string;
          address?: string | null;
          medical_history?: string | null;
          allergies?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          patient_id?: string;
          full_name?: string;
          age?: number;
          gender?: 'male' | 'female' | 'other';
          phone?: string;
          address?: string | null;
          medical_history?: string | null;
          allergies?: string | null;
          created_at?: string;
        };
      };
      appointments: {
        Row: {
          id: string;
          patient_id: string;
          doctor_id: string | null;
          appointment_date: string;
          appointment_time: string;
          status: 'scheduled' | 'completed' | 'cancelled';
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          patient_id: string;
          doctor_id?: string | null;
          appointment_date: string;
          appointment_time: string;
          status?: 'scheduled' | 'completed' | 'cancelled';
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          patient_id?: string;
          doctor_id?: string | null;
          appointment_date?: string;
          appointment_time?: string;
          status?: 'scheduled' | 'completed' | 'cancelled';
          notes?: string | null;
          created_at?: string;
        };
      };
      consultations: {
        Row: {
          id: string;
          patient_id: string;
          doctor_id: string;
          appointment_id: string | null;
          diagnosis: string | null;
          symptoms: string | null;
          spiritual_notes: string | null;
          treatment_plan: string | null;
          consultation_date: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          patient_id: string;
          doctor_id: string;
          appointment_id?: string | null;
          diagnosis?: string | null;
          symptoms?: string | null;
          spiritual_notes?: string | null;
          treatment_plan?: string | null;
          consultation_date?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          patient_id?: string;
          doctor_id?: string;
          appointment_id?: string | null;
          diagnosis?: string | null;
          symptoms?: string | null;
          spiritual_notes?: string | null;
          treatment_plan?: string | null;
          consultation_date?: string;
          created_at?: string;
        };
      };
      medicines: {
        Row: {
          id: string;
          name: string;
          quantity: number;
          price: number;
          expiry_date: string | null;
          low_stock_threshold: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          quantity?: number;
          price: number;
          expiry_date?: string | null;
          low_stock_threshold?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          quantity?: number;
          price?: number;
          expiry_date?: string | null;
          low_stock_threshold?: number;
          created_at?: string;
        };
      };
      prescriptions: {
        Row: {
          id: string;
          patient_id: string;
          doctor_id: string;
          consultation_id: string | null;
          prescription_date: string;
          status: 'pending' | 'dispensed';
          created_at: string;
        };
        Insert: {
          id?: string;
          patient_id: string;
          doctor_id: string;
          consultation_id?: string | null;
          prescription_date?: string;
          status?: 'pending' | 'dispensed';
          created_at?: string;
        };
        Update: {
          id?: string;
          patient_id?: string;
          doctor_id?: string;
          consultation_id?: string | null;
          prescription_date?: string;
          status?: 'pending' | 'dispensed';
          created_at?: string;
        };
      };
      prescription_items: {
        Row: {
          id: string;
          prescription_id: string;
          medicine_id: string;
          dosage: string;
          duration: string;
          instructions: string | null;
          quantity: number;
        };
        Insert: {
          id?: string;
          prescription_id: string;
          medicine_id: string;
          dosage: string;
          duration: string;
          instructions?: string | null;
          quantity: number;
        };
        Update: {
          id?: string;
          prescription_id?: string;
          medicine_id?: string;
          dosage?: string;
          duration?: string;
          instructions?: string | null;
          quantity?: number;
        };
      };
      laboratory_tests: {
        Row: {
          id: string;
          patient_id: string;
          test_name: string;
          test_date: string;
          results: string | null;
          requested_by: string;
          status: 'pending' | 'completed';
          created_at: string;
        };
        Insert: {
          id?: string;
          patient_id: string;
          test_name: string;
          test_date?: string;
          results?: string | null;
          requested_by: string;
          status?: 'pending' | 'completed';
          created_at?: string;
        };
        Update: {
          id?: string;
          patient_id?: string;
          test_name?: string;
          test_date?: string;
          results?: string | null;
          requested_by?: string;
          status?: 'pending' | 'completed';
          created_at?: string;
        };
      };
      invoices: {
        Row: {
          id: string;
          invoice_number: string;
          patient_id: string;
          total_amount: number;
          payment_method: 'cash' | 'mobile_money' | null;
          payment_status: 'pending' | 'paid';
          invoice_date: string;
          created_by: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          invoice_number: string;
          patient_id: string;
          total_amount: number;
          payment_method?: 'cash' | 'mobile_money' | null;
          payment_status?: 'pending' | 'paid';
          invoice_date?: string;
          created_by: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          invoice_number?: string;
          patient_id?: string;
          total_amount?: number;
          payment_method?: 'cash' | 'mobile_money' | null;
          payment_status?: 'pending' | 'paid';
          invoice_date?: string;
          created_by?: string;
          created_at?: string;
        };
      };
      invoice_items: {
        Row: {
          id: string;
          invoice_id: string;
          item_type: 'service' | 'medicine';
          description: string;
          quantity: number;
          unit_price: number;
          total_price: number;
        };
        Insert: {
          id?: string;
          invoice_id: string;
          item_type: 'service' | 'medicine';
          description: string;
          quantity: number;
          unit_price: number;
          total_price: number;
        };
        Update: {
          id?: string;
          invoice_id?: string;
          item_type?: 'service' | 'medicine';
          description?: string;
          quantity?: number;
          unit_price?: number;
          total_price?: number;
        };
      };
    };
  };
};
