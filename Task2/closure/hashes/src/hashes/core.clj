(ns hashes.core
  (:gen-class)
  (:import java.io.File)
  (:require [pandect.core :refer :all]))

(defn calc-file-hashes [directory]
  (doseq [file (.listFiles directory)]
    (if (.isFile file)
      (do
        (def file-name (.getName file))
        (def file-content (slurp file-name))
        (def hex-digest (sha3-256 file-content))
        (println file-name " " hex-digest)))))

(defn -main
  "Calculates and prints SHA3-256 for each file in current directory"
  [& args]
  (calc-file-hashes (File. ".")))

