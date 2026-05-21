-- Migration: add_leads_notion_sync_fields
-- Date: 2026-05-21
-- Project: igarden-web (Supabase ref: ozheuxpcgvhzkebriqij)
-- Context: B2B GTM Engine / Leads Pipeline — Phase 0
-- NOTE: Applied manually via Supabase SQL Editor on 2026-05-21 (verified via MCP).
--       This file documents the change for repo history.
--       Repo is NOT yet Supabase-CLI managed (no config.toml / link).
-- Purpose: one-way Supabase → Notion sync tracking fields on public.leads.

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS notion_page_id text,
  ADD COLUMN IF NOT EXISTS synced_to_notion_at timestamptz,
  ADD COLUMN IF NOT EXISTS sync_status text NOT NULL DEFAULT 'pending';

ALTER TABLE public.leads
  ADD CONSTRAINT leads_sync_status_check
  CHECK (sync_status IN ('pending', 'synced', 'failed', 'skipped'));

CREATE INDEX IF NOT EXISTS idx_leads_sync_status ON public.leads (sync_status);
