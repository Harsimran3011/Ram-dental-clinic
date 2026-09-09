const useData = () => {
  const treatments = [
    {
      category: "Preventive Dentistry",
      title: "General Dental Checkup",
      description:
        "Complete dental examination to maintain your oral health and detect problems early.",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Restorative Dentistry",
      title: "Dental Implants",
      description:
        "Modern tooth replacement solutions designed to restore function, comfort and confidence.",
      image:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Restorative Dentistry",
      title: "Root Canal Treatment",
      description:
        "Careful treatment for infected or damaged teeth while preserving your natural smile.",
      image:
        "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Cosmetic Dentistry",
      title: "Cosmetic Dentistry",
      description:
        "Personalized cosmetic treatments to help you achieve a brighter and more confident smile.",
      image:
        "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Aesthetic Dentistry",
      title: "Teeth Whitening",
      description:
        "Professional whitening treatments designed to refresh and brighten your smile.",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Family Dentistry",
      title: "Family Dental Care",
      description:
        "Comfortable and comprehensive dental care for patients of different ages.",
      image:
        "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const highlights = [
    "Personalized treatment planning",
    "Modern dental techniques",
    "Patient-focused experience",
    "Comprehensive dental care",
  ];

  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Happy Patients",
    },
    {
      value: 10,
      suffix: "+",
      label: "Years Experience",
    },
    {
      value: 15,
      suffix: "+",
      label: "Treatments",
    },
    {
      value: 98,
      suffix: "%",
      label: "Patient Satisfaction",
    },
  ];

  return {
    treatments,
    highlights,
    stats,
  };
};

export default useData;
