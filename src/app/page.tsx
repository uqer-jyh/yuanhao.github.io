"use client";

import {
  Avatar,
  Box,
  Chip,
  Container,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  newsItems,
  publications,
  researchExperience,
  researchInterests,
  technicalToolkit,
} from "@/data/site";

const contactInfo = [
  { icon: FaGithub, text: "GitHub", href: "https://github.com/uqer-jyh" },
  { icon: FaGraduationCap, text: "Google Scholar", href: "" },
  { icon: FaEnvelope, text: "Email", href: "" },
  { icon: FaMapMarkerAlt, text: "Newcastle, NSW", href: "" },
];

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: 280 }, flexShrink: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              mb: 3,
            }}
          >
            <Avatar
              alt="Yuanhao Jiang"
              src="/images/profile.png"
              sx={{ width: 180, height: 180, border: 3, borderColor: "divider" }}
            />
          </Box>

          <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 3 }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                mb: 1,
              }}
            >
              Yuanhao Jiang
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              PhD Student in Medical Genetics
            </Typography>
            <Typography variant="body2" color="text.secondary">
              AI-informed brain tumour classification
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.75,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {researchInterests.map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  size="small"
                  sx={{
                    bgcolor: "action.hover",
                    color: "text.primary",
                    fontSize: "0.75rem",
                    height: 24,
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {contactInfo.map((item) => (
              <Box
                key={item.text}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <item.icon
                  size={16}
                  style={{ color: "var(--text-secondary)", flexShrink: 0 }}
                />
                {item.href ? (
                  <MuiLink
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "text.secondary", fontSize: "0.875rem" }}
                  >
                    {item.text}
                  </MuiLink>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ mb: 5 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              I am a 3rd-year PhD student in Medical Genetics at the University
              of Newcastle and Hunter Medical Research Institute, specializing in
              AI-informed brain tumour classification under the supervision of
              Professor Matt Dun OAM.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
              I develop computational methods to explain the molecular
              complexity of diffuse midline glioma, a rare brain tumour that
              remains aggressive and incurable. My work spans multi-omics
              integration across DNA-seq, methylation profiling, spatial-omics,
              and high-throughput imaging data.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2 }}>
              Before my PhD, I worked as a research assistant at the Institute
              for Molecular Bioscience, The University of Queensland, until
              April 2024, and was affiliated with QIMR Berghofer under the
              supervision of Associate Professor Quan Nguyen. I then worked at
              the University of Newcastle in Callaghan, Australia from May to
              June 2024 under the supervision of Professor Matt Dun OAM. I also
              completed my postgraduate studies at UQ with Dr. Nan Ye and
              Associate Professor Quan Nguyen.
            </Typography>
          </Box>

          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, mb: 2 }}
            >
              Research Experience
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
              {researchExperience.map((item) => (
                <Typography key={item} variant="body2" color="text.secondary">
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 600, mb: 2 }}
            >
              Technical Toolkit
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {technicalToolkit.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  sx={{ bgcolor: "action.hover", color: "text.primary" }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}
              >
                News
              </Typography>
            </Box>
            <Box>
              {newsItems.map((item, index) => (
                <Box
                  key={item.title}
                  sx={{
                    display: "flex",
                    gap: 2,
                    py: 1.5,
                    borderBottom: index < newsItems.length - 1 ? 1 : 0,
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ width: 70, flexShrink: 0, fontFamily: "monospace" }}
                  >
                    {item.date}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}
              >
                Selected Publications
              </Typography>
              <Link href="/publications" passHref style={{ textDecoration: "none" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "primary.main", "&:hover": { textDecoration: "underline" } }}
                >
                  All Publications →
                </Typography>
              </Link>
            </Box>
            <Box>
              {publications.map((pub, index) => (
                <Box
                  key={pub.title}
                  sx={{
                    py: 2,
                    borderBottom: index < publications.length - 1 ? 1 : 0,
                    borderColor: "divider",
                  }}
                >
                  <MuiLink
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontWeight: 500,
                      mb: 0.5,
                      lineHeight: 1.5,
                      display: "block",
                      color: "text.primary",
                    }}
                  >
                    {pub.title}
                  </MuiLink>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {pub.authors}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "primary.main", fontStyle: "italic" }}>
                    {pub.journal}, {pub.year}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
