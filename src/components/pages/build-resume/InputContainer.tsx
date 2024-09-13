import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import Input from "./Input";
import { Add, Delete, Edit } from "@mui/icons-material";
import SkillsContainer from "./SkillContainer";
import { useGlobalContext } from "@/utils/providers";

type Props = {
  // inputDatas: any;
  // setinputDatas: React.Dispatch<React.SetStateAction<InputData>>;
  activeStage: string;
};
export default function InputContainer({ activeStage }: Props) {
  const {
    inputDatas,
    setinputDatas,
    learnedSkill,
    setlearnedSkill,
    experience,
    setexperience,
    skills,
    setskills,
    education,
    seteducation,
  } = useGlobalContext();
  const handleFormData = (key: string, value: any) => {
    setinputDatas((prev: any) => ({ ...prev, [key]: value }));
  };
  const handleVisibility = (state: any) => {
    handleFormData("isVisible", state);
  };
  const handleOnchange = (e: any) => {
    const { name, value } = e.target;
    handleFormData(name, value);
  };
  const handleEducationData = (key: string, value: any) => {
    seteducation((prev: any) => ({ ...prev, [key]: value }));
  };
  const handleSkillsData = (key: string, value: any) => {
    setskills((prev: any) => ({ ...prev, [key]: value }));
  };
  const handleExperienceData = (key: string, value: any) => {
    setexperience((prev: any) => ({ ...prev, [key]: value }));
  };
  const handleEducationOnchange = (e: any) => {
    const { name, value } = e.target;
    handleEducationData(name, value);
  };
  const handleSkillsOnchange = (e: any) => {
    const { name, value } = e.target;
    handleSkillsData(name, value);
  };
  const handleExperienceOnchange = (e: any) => {
    const { name, value } = e.target;
    handleExperienceData(name, value);
  };
  const handleSubmitEducations = () => {
    if (
      education.institution !== "" &&
      education.department !== "" &&
      education.from !== "" &&
      education.to !== "" &&
      education.percentage !== ""
    ) {
      handleFormData("education", [...inputDatas.education, education]);
      seteducation({
        from: "",
        to: "",
        institution: "",
        department: "",
        percentage: "",
      });
    } else {
      toast.error("Missing mandatory field");
    }
  };
  const handleSubmitSkill = (key: any) => {
    if (
      skills.technical !== "" ||
      skills.soft !== "" ||
      skills.language !== ""
    ) {
      if (key == "technical") {
        inputDatas.skills?.technical.push(skills?.technical);
      } else if (key == "soft") {
        inputDatas.skills?.soft.push(skills.soft);
      } else if (key == "language") {
        inputDatas.skills?.language.push(skills.language);
      }
      setskills((prev: any) => ({ ...prev, [key]: "" }));
    } else {
      toast.error("Missing mandatory field");
    }
  };

  const handleSubmitLearnedSkills = () => {
    if (learnedSkill != "") {
      experience.skills.push(learnedSkill);
      setlearnedSkill("");
    } else {
      toast.error("Fill the skill input");
    }
  };
  const handleSubmitExperience = () => {
    if (
      experience.company_name !== "" &&
      experience.description !== "" &&
      experience.from !== "" &&
      experience.to !== "" &&
      experience.state !== "" &&
      experience.place !== "" &&
      experience.skills.length != 0
    ) {
      handleFormData("experience", [...inputDatas?.experience, experience]);
      setexperience({
        from: "",
        to: "",
        company_name: "",
        role: "",
        description: "",
        skills: [],
        place: "",
        state: "",
      });
    } else {
      toast.error("Missing mandatory field");
    }
  };
  const inputArray = [
    {
      isvisible: "headers",
      name: "name",
      label: "Name",
      placeholder: "eg : John",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.name,
      width: "2",
    },
    {
      isvisible: "headers",
      name: "last_name",
      label: "Surname",
      placeholder: "eg : Sam",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.last_name,
      width: "2",
    },
    {
      isvisible: "headers",
      name: "role",
      label: "Role",
      placeholder: "eg : Mern stack developer",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.role,
      width: "2",
    },
    {
      isvisible: "headers",
      name: "mail",
      label: "Email",
      placeholder: "eg : john@gmail.com",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.mail,
      width: "2",
    },
    {
      isvisible: "headers",
      name: "phone",
      label: "Mobile Number",
      placeholder: "eg : 90****558",
      type: "number",
      onChange: handleOnchange,
      value: inputDatas.phone,
      width: "2",
    },
    {
      isvisible: "headers",
      name: "linkedIn",
      label: "LinkedIn",
      placeholder: "eg : https://www.linkedin.com/in/john-88****1a0",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.linkedIn,
      width: "2",
    },
    {
      isvisible: "headers",
      name: "git",
      label: "GitHub",
      placeholder: "eg : https://github.com/John_Sample",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.git,
      width: "2",
    },
    {
      isvisible: "headers",
      name: "district",
      label: "District",
      placeholder: "eg : Erode",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.district,
      width: "2",
    },
    {
      isvisible: "headers",
      name: "state",
      label: "State",
      placeholder: "eg : Tamilnadu",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.state,
      width: "2",
    },
    {
      isvisible: "headers",
      name: "country",
      label: "Country",
      placeholder: "eg : India",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.country,
      width: "2",
    },
    {
      isvisible: "summary",
      name: "about",
      label: "Career objective",
      placeholder: "type here...",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.about,
      width: "1",
      mode: "big",
    },
    {
      isvisible: "education",
      name: "education",
      label: "Education",
      placeholder: "eg : BE",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.education,
      width: "1",
      mode: "expandable",
      subInput: [
        {
          isvisible: "education",
          name: "institution",
          label: "Institution or School",
          placeholder: "type your institution or school name",
          type: "text",
          onChange: handleEducationOnchange,
          value: education.institution,
          width: "1",
        },
        {
          isvisible: "education",
          name: "department",
          label: "Department or class",
          placeholder: "eg : BE / HSC / SSLC",
          type: "text",
          onChange: handleEducationOnchange,
          value: education.department,
          width: "2",
        },
        {
          isvisible: "education",
          name: "percentage",
          label: "Percentage or CGPA",
          placeholder: "eg : 80 or 8.8",
          type: "text",
          onChange: handleEducationOnchange,
          value: education.percentage,
          width: "2",
        },
        {
          isvisible: "education",
          name: "from",
          label: "From",
          placeholder: "From",
          type: "date",
          onChange: handleEducationOnchange,
          value: education.from,
          width: "2",
        },
        {
          isvisible: "education",
          name: "to",
          label: "To",
          placeholder: "To",
          type: "date",
          onChange: handleEducationOnchange,
          value: education.to,
          width: "2",
        },
      ],
      submitHandler: handleSubmitEducations,
    },
    {
      isvisible: "skills",
      name: "skills",
      label: "Skills",
      placeholder: "Skills",
      type: "text",
      onChange: handleOnchange,
      value: [],
      width: "1",
      mode: "expandable",
      subInput: [
        {
          isvisible: "skills",
          name: "technical",
          label: "Technical skill",
          placeholder: "eg : HTML,Java,Python,Git etc...",
          type: "text",
          onChange: handleSkillsOnchange,
          value: skills.technical,
          arrValue: inputDatas.skills?.technical,
          width: "1",
        },
        {
          isvisible: "skills",
          name: "soft",
          label: "Soft skill",
          placeholder: "eg : Team Player,Hard Work etc...",
          type: "text",
          onChange: handleSkillsOnchange,
          value: skills.soft,
          arrValue: inputDatas.skills?.soft,
          width: "1",
        },
        {
          isvisible: "skills",
          name: "language",
          label: "Language",
          placeholder: "eg : Tamil,English,Hindi etc...",
          type: "text",
          onChange: handleSkillsOnchange,
          value: skills.language,
          arrValue: inputDatas.skills?.language,
          width: "1",
        },
      ],
      submitHandler: (key: any) => handleSubmitSkill(key),
      handleUpdatedData: (name: string, data: any) =>
        handleFormData("skills", {
          ...inputDatas.skills,
          [name]: data,
        }),
    },
    {
      isvisible: "experience",
      name: "experience",
      label: "Experience",
      placeholder: "experience",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.experience,
      width: "1",
      mode: "expandable",
      subInput: [
        {
          isvisible: "experience",
          name: "company_name",
          label: "Company Name",
          placeholder: "eg : ABC solutions",
          type: "text",
          onChange: handleExperienceOnchange,
          value: experience.company_name,
          width: "2",
        },
        {
          isvisible: "experience",
          name: "role",
          label: "Role",
          placeholder: "eg : Mern stack developer",
          type: "text",
          onChange: handleExperienceOnchange,
          value: experience.role,
          width: "2",
        },

        {
          isvisible: "experience",
          name: "place",
          label: "Place",
          placeholder: "eg : coimbatore",
          type: "text",
          onChange: handleExperienceOnchange,
          value: experience.place,
          width: "2",
        },
        {
          isvisible: "experience",
          name: "state",
          label: "State",
          placeholder: "eg : Tamilnadu",
          type: "text",
          onChange: handleExperienceOnchange,
          value: experience.state,
          width: "2",
        },
        {
          isvisible: "experience",
          name: "description",
          label: "Description",
          placeholder: "type about your experience...",
          type: "text",
          onChange: handleExperienceOnchange,
          value: experience.description,
          width: "1",
          mode: "big",
        },
        {
          isvisible: "experience",
          name: "skill",
          label: "Learned skills",
          placeholder: "type skills you have learned...",
          type: "text",
          onChange: (e: any) => setlearnedSkill(e.target.value),
          value: learnedSkill,
          width: "1",
          arrValue: experience.skills,
          submitHandler: handleSubmitLearnedSkills,
        },
        {
          isvisible: "experience",
          name: "from",
          label: "From",
          placeholder: "From",
          type: "date",
          onChange: handleExperienceOnchange,
          value: experience.from,
          width: "2",
        },
        {
          isvisible: "experience",
          name: "to",
          label: "To",
          placeholder: "To",
          type: "date",
          onChange: handleExperienceOnchange,
          value: experience.to,
          width: "2",
        },
      ],
      submitHandler: handleSubmitExperience,
      handleUpdatedData: (name: any, data: any) =>
        handleExperienceData("skills", data),
    },
  ];
  return (
    <Grid
      container
      sx={{
        width: "100%",
        marginTop: 3,
        padding: 1,
      }}
      spacing={2}
    >
      {inputArray.map((elem: any, index: number) => {
        if (elem.isvisible == activeStage) {
          if (
            (elem.width == "2" || elem.width == "3" || elem.width == "1") &&
            elem.mode != "expandable"
          ) {
            return (
              <Grid
                key={index}
                xs={12}
                md={elem.width == "2" ? 6 : elem.width == "3" ? 4 : 12}
                item
              >
                <Input
                  value={elem.value}
                  type={elem.type}
                  label={elem.label}
                  placeholder={elem.placeholder}
                  onChange={elem.onChange}
                  name={elem.name}
                  multiline={elem.mode == "big" ? true : false}
                />
              </Grid>
            );
          } else if (elem.mode == "expandable") {
            return (
              <Grid key={index} xs={12} md={12} item>
                {elem.value?.map((val: any, valIndex: number) => {
                  if (elem.name == "education") {
                    return (
                      <Stack
                        key={valIndex}
                        sx={{
                          width: "100%",
                          padding: 2,
                          borderBottom: "2px solid slategray",
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 3,
                              color: "#17759b",
                            }}
                          >
                            <Typography sx={{ fontWeight: "bold" }}>
                              {val.department}
                            </Typography>
                            <Chip
                              size="small"
                              label={val.percentage}
                              color="success"
                              sx={{ color: "white" }}
                            />
                          </Box>
                          <Typography sx={{ color: "gray" }}>
                            {val.from.substr(0, 4)}-{val.to.substr(0, 4)}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "black",
                              marginLeft: "5px",
                              marginTop: "5px",
                            }}
                          >
                            {val.institution}
                          </Typography>
                          <Box>
                            <IconButton
                              onClick={() => {
                                const newData = elem.value.find(
                                  (i: any, index: number) => index == valIndex
                                );
                                seteducation(newData);
                                const newDatas = elem.value.filter(
                                  (i: any, index: number) => index !== valIndex
                                );
                                handleFormData("education", newDatas);
                              }}
                              sx={{ color: "slategray" }}
                            >
                              <Edit />
                            </IconButton>
                            <IconButton
                              onClick={() => {
                                const newData = elem.value.filter(
                                  (i: any, index: number) => index !== valIndex
                                );
                                handleFormData("education", newData);
                              }}
                              sx={{ color: "red" }}
                            >
                              <Delete />
                            </IconButton>
                          </Box>
                        </Box>
                      </Stack>
                    );
                  } else if (elem.name == "experience") {
                    return (
                      <Stack
                        key={valIndex}
                        sx={{
                          width: "100%",
                          padding: 2,
                          borderBottom: "2px solid slategray",
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              color: "#17759b",
                            }}
                          >
                            <div>
                              <Typography sx={{ fontWeight: "bold" }}>
                                {val.company_name}
                              </Typography>
                              <Typography
                                sx={{
                                  color: "gray",
                                  fontSize: "13px",
                                }}
                              >
                                {val.role}
                              </Typography>
                            </div>
                            |
                            <Typography
                              sx={{
                                color: "gray",
                                fontSize: "13px",
                              }}
                            >
                              {val.place}
                            </Typography>
                            |
                            <Typography
                              sx={{
                                color: "gray",
                                fontSize: "13px",
                              }}
                            >
                              {val.state}
                            </Typography>
                          </Box>
                          <Typography sx={{ color: "gray" }}>
                            {val.from.substr(0, 4)}-{val.to.substr(0, 4)}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <div className="flex gap-2">
                              {val.skills.map(
                                (skill: any, skillIndex: number) => {
                                  return (
                                    <Chip
                                      key={skillIndex}
                                      size="small"
                                      label={skill}
                                      color="success"
                                      sx={{ color: "white" }}
                                    />
                                  );
                                }
                              )}
                            </div>
                            <Typography
                              sx={{
                                color: "black",
                                marginLeft: "5px",
                                marginTop: "5px",
                              }}
                            >
                              {val.description}
                            </Typography>
                          </div>

                          <Box>
                            <IconButton
                              onClick={() => {
                                const newData = elem.value.find(
                                  (i: any, index: number) => index == valIndex
                                );
                                setexperience(newData);
                                const newDatas = elem.value.filter(
                                  (i: any, index: number) => index !== valIndex
                                );
                                handleFormData("experience", newDatas);
                              }}
                              sx={{ color: "slategray" }}
                            >
                              <Edit />
                            </IconButton>
                            <IconButton
                              onClick={() => {
                                const newData = elem.value.filter(
                                  (i: any, index: number) => index !== valIndex
                                );
                                handleFormData("experience", newData);
                              }}
                              sx={{ color: "red" }}
                            >
                              <Delete />
                            </IconButton>
                          </Box>
                        </Box>
                      </Stack>
                    );
                  }
                })}

                <Grid
                  container
                  sx={{ width: "100%", ml: "1px", mb: 1 }}
                  spacing={2}
                >
                  {elem.subInput?.map((input: any, inputIndex: number) => {
                    return (
                      <Grid
                        key={inputIndex}
                        md={
                          input.width == "2" ? 6 : input.width == "3" ? 4 : 12
                        }
                        item
                        sx={{
                          flexDirection: "column",
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          width: "100%",
                          gap: 1,
                        }}
                      >
                        {elem.name == "skills" || input.name == "skill" ? (
                          <div className="w-full flex flex-row gap-2 items-end">
                            <Input
                              value={input.value}
                              type={input.type}
                              label={input.label}
                              placeholder={input.placeholder}
                              onChange={input.onChange}
                              multiline={input.mode == "big" ? true : false}
                              name={input.name}
                            />
                            {(elem.name == "skills" ||
                              input.name == "skill") && (
                              <Button
                                size="small"
                                onClick={
                                  input.name == "skill"
                                    ? input.submitHandler
                                    : () => elem.submitHandler(input.name)
                                }
                                variant="contained"
                                sx={{
                                  color: "white",
                                  borderRadius: 4,
                                  "&:hover": {
                                    color: "white",
                                    border: "2px solid lavender",
                                  },
                                  textTransform: "none",
                                  border: "2px solid cornflowerblue",
                                  height: 43,
                                }}
                              >
                                Add
                              </Button>
                            )}
                          </div>
                        ) : (
                          <Input
                            value={input.value}
                            type={input.type}
                            label={input.label}
                            placeholder={input.placeholder}
                            onChange={input.onChange}
                            multiline={input.mode == "big" ? true : false}
                            name={input.name}
                          />
                        )}
                        {(elem.name == "skills" || input.name == "skill") && (
                          <SkillsContainer
                            data={input.arrValue}
                            handleFormData={(data: any) =>
                              elem.handleUpdatedData(input.name, data)
                            }
                          />
                        )}
                      </Grid>
                    );
                  })}
                  {elem.name != "skills" && (
                    <Grid
                      item
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row-reverse",
                      }}
                    >
                      <Button
                        onClick={elem.submitHandler}
                        startIcon={<Add />}
                        variant="contained"
                        sx={{
                          color: "white",
                          borderRadius: 4,
                          "&:hover": {
                            color: "white",
                            border: "2px solid lavender",
                          },
                          textTransform: "none",
                          height: 43,
                          width: 130,
                          marginTop: 2,
                          border: "2px solid cornflowerblue",
                          // fontFamily: "cursive",
                        }}
                      >
                        Add
                      </Button>
                    </Grid>
                  )}
                </Grid>

                {/* <div ref={scrollRef}></div> */}
              </Grid>
            );
          }
        }
      })}
    </Grid>
  );
}
