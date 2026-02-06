CREATE TABLE IF NOT EXISTS newsletter_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS brochure_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  address TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE brochure_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "newsletter_insert" ON newsletter_signups FOR INSERT WITH CHECK (true);
CREATE POLICY "brochure_insert" ON brochure_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "quote_insert" ON quote_requests FOR INSERT WITH CHECK (true);
