"use client";

import { Box, Container, Typography } from "@mui/material";

const education = [
  {
    degree: "PhD in Medical Genetics",
    institution:
      "University of Newcastle and Hunter Medical Research Institute",
    year: "3rd year",
    detail:
      "AI-informed brain tumour classification under the supervision of Professor Matt Dun OAM.",
  },
  {
    degree: "M.S. in Data Science",
    institution: "The University of Queensland",
    year: "2023",
    detail: "",
  },
];

const experience = [
  {
    period: "Jul 2023 - Aug 2024",
    role: "Research Assistant",
    institution: "UQ Institute for Molecular Bioscience",
    location: "Brisbane, Australia",
    supervisor: "Associate Professor Quan Nguyen",
  },
  {
    period: "Dec 2021 - Mar 2022",
    role: "Intern",
    institution: "Elliptic Labs",
    location: "Shenzhen, China",
    supervisor: "Mr. Raymond",
  },
  {
    period: "Apr 2021 - Aug 2021",
    role: "Intern",
    institution: "Chongqing Shete Meteorological Research Institute",
    location: "Chongqing, China",
    supervisor: "Mr. Zhaodong Li",
  },
];

export default function CVPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, mb: 2 }}
        >
          CV
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Education and research experience.
        </Typography>
      </Box>

      <Box sx={{ mb: 5 }}>
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
          Education
        </Typography>
        {education.map((item) => (
          <Box key={item.degree} sx={{ py: 1.5 }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {item.degree}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.institution}, {item.year}
            </Typography>
            {item.detail && (
              <Typography variant="body2" color="text.secondary">
                {item.detail}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      <Box>
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
          Work Experience
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {experience.map((item) => (
            <Box
              key={`${item.period}-${item.institution}`}
              sx={{
                p: 2.5,
                mx: -2.5,
                borderRadius: 2,
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "monospace", mb: 0.75 }}
              >
                {item.period}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {item.role}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.institution}, {item.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Supervisor: {item.supervisor}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
