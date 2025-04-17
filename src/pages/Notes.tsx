import { useState, useRef } from "react";
import MainLayout from "../components/MainLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {notesData} from "../data/notesData"

const Notes = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [activeSubjectIndex, setActiveSubjectIndex] = useState(null);
  const [selectedUnitLink, setSelectedUnitLink] = useState(null);
  const previewRef = useRef(null);

  const classOptions = Object.keys(notesData);

  const handleSubjectClick = (index) => {
    setActiveSubjectIndex((prevIndex) => (prevIndex === index ? null : index));
    setSelectedUnitLink(null);
  };

  const handleUnitClick = (link) => {
    setSelectedUnitLink(link);
    // Scroll to preview section after a small delay
    setTimeout(() => {
      previewRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <section className="glass rounded-2xl p-8 mb-8 dark:bg-gray-800 dark:text-white text-center">
          <h1 className="text-4xl font-bold mb-4 text-grit-800 dark:text-white">
            Class Notes
          </h1>
          <p className="text-grit-600 dark:text-gray-300">
            Select your class and explore subject-wise notes curated for your curriculum.
          </p>
        </section>

        {/* Dropdown */}
        <div className="mb-6 text-center">
          <select
            value={selectedClass}
            onChange={(e) => {
              setSelectedClass(e.target.value);
              setActiveSubjectIndex(null);
              setSelectedUnitLink(null);
            }}
            className="p-3 rounded-md bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
          >
            <option value="">Select Your Class</option>
            {classOptions.map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
        </div>

        {/* Subjects */}
        {selectedClass && (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notesData[selectedClass].map((note, index) => (
              <Card
                key={index}
                className="glass p-6 dark:bg-gray-800 dark:hover:bg-gray-700 transition-shadow cursor-pointer"
              >
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold mb-3 text-grit-800 dark:text-white">
                    {note.subject}
                  </h2>
                  <Button onClick={() => handleSubjectClick(index)}>
                    {activeSubjectIndex === index ? "Hide Units" : "Read Notes"}
                  </Button>

                  {/* Unit Buttons */}
                  {activeSubjectIndex === index && (
                    <div className="mt-4 space-y-2">
                      {note.units.map((unit, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          className="w-full justify-start text-left"
                          onClick={() => handleUnitClick(unit.link)}
                        >
                          {unit.name}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </section>
        )}

        {/* PDF Viewer */}
        {selectedUnitLink && (
          <section
            ref={previewRef}
            className="mt-10 glass p-6 rounded-xl dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold mb-4 text-grit-800 dark:text-white">
              Preview
            </h3>
            <div className="w-full h-[630px] rounded-lg overflow-hidden">
              <iframe
                src={selectedUnitLink}
                title="Notes Preview"
                className="w-full h-full rounded-lg"
                frameBorder="0"
              ></iframe>
            </div>
          </section>
        )}
      </div>
    </MainLayout>
  );
};

export default Notes;
