/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { DocumentManagement } from '@/pages/DocumentManagement';
import { FlowAnalysis } from '@/pages/FlowAnalysis';
import { TestScenarios } from '@/pages/TestScenarios';
import { YamlExport } from '@/pages/YamlExport';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DocumentManagement />} />
          <Route path="flow-analysis" element={<FlowAnalysis />} />
          <Route path="test-scenarios" element={<TestScenarios />} />
          <Route path="yaml-export" element={<YamlExport />} />
        </Route>
      </Routes>
    </Router>
  );
}
