"use client";

import {
  Box,
  Chip,
  Container,
  IconButton,
  Link as MuiLink,
  Tooltip,
  Typography,
} from "@mui/material";
import { FaExternalLinkAlt, FaQuoteRight } from "react-icons/fa";
import { publications } from "@/data/site";

const typeConfig = {
  journal: { color: "#7c4dff", label: "Journal" },
  conference: { color: "#10b981", label: "Conference" },
  preprint: { color: "#f59e0b", label: "Preprint" },
};

const groupedPublications = publications.reduce((acc, pub) => {
  if (!acc[pub.year]) acc[pub.year] = [];
  acc[pub.year].push(pub);
  return acc;
}, {} as Record<number, typeof publications>);

const sortedYears = Object.keys(groupedPublications)
  .map(Number)
  .sort((a, b) => b - a);

export default function PublicationsPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, mb: 2 }}
        >
          Publications
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Academic publications in AI-informed brain tumour classification,
          multi-omics integration, biomedical image analysis, and spatial gene
          expression prediction.
        </Typography>
      </Box>

      {sortedYears.map((year) => (
        <Box key={year} sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
              color: "primary.main",
              mb: 3,
              pb: 1,
              borderBottom: 2,
              borderColor: "primary.main",
            }}
          >
            {year}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {groupedPublications[year].map((pub) => (
              <Box
                key={pub.title}
                sx={{
                  p: 2.5,
                  mx: -2.5,
                  borderRadius: 2,
                  transition: "background-color 0.2s ease",
                  "&:hover": { bgcolor: "action.hover" },
                  ...(pub.highlight && {
                    borderLeft: 3,
                    borderColor: "primary.main",
                    pl: 2,
                    ml: -2,
                  }),
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, mb: 1, lineHeight: 1.5 }}
                >
                  {pub.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {pub.authors}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "wrap",
                    mb: 1.5,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontStyle: "italic", color: "primary.main" }}
                  >
                    {pub.journal}
                  </Typography>
                  <Chip
                    label={typeConfig[pub.type].label}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: "0.65rem",
                      bgcolor: `${typeConfig[pub.type].color}15`,
                      color: typeConfig[pub.type].color,
                      fontWeight: 500,
                    }}
                  />
                  {pub.highlight && (
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        height: 20,
                        fontSize: "0.65rem",
                        bgcolor: "secondary.light",
                        color: "secondary.dark",
                        fontWeight: 500,
                      }}
                    />
                  )}
                </Box>
                <Tooltip title="Publisher page" arrow>
                  <IconButton
                    component="a"
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                  >
                    <FaExternalLinkAlt size={14} />
                  </IconButton>
                </Tooltip>
              </Box>
            ))}
          </Box>
        </Box>
      ))}

      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 2,
          bgcolor: "action.hover",
          display: "flex",
          gap: 2,
          alignItems: "flex-start",
        }}
      >
        <FaQuoteRight
          size={20}
          style={{ color: "var(--primary)", flexShrink: 0, marginTop: 4 }}
        />
        <Typography variant="body2" color="text.secondary">
          Recommended citation: Xie J, Tan X, Jiang Y, Nguyen H, Ye N, Nguyen Q.
          Performance of deep learning methods for spatial gene expression
          prediction from histology images: a comprehensive assessment.
          <MuiLink
            href="https://doi.org/10.1093/bioadv/vbag202"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ml: 0.5 }}
          >
            Bioinformatics Advances, 2026, vbag202.
          </MuiLink>
        </Typography>
      </Box>
    </Container>
  );
}
