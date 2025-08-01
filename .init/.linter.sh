#!/bin/bash
cd /home/kavia/workspace/code-generation/interactive-wireframe-prototype-19413-19422/figma_wireframe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

