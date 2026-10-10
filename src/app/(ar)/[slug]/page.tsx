import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContactView from '@/components/ContactView';
import ProjectsView from '@/components/ProjectsView';
import AboutView from '@/components/AboutView';
import JeddahView from '@/components/JeddahView';
import RiyadhView from '@/components/RiyadhView';
import SolutionsView from '@/components/SolutionsView';
import SectorsView from '@/components/SectorsView';
import WarehouseRackingView from '@/components/WarehouseRackingView';
import RetailShelvingView from '@/components/RetailShelvingView';
import LegalView from '@/components/LegalView';
import { company, pageMeta } from '@/lib/data';
import { canonicalUrl, isSearchIndexingEnabled, siteOrigin } from '@/lib/seo';
import { alternateMetadata, type ContentSlug } from '@/lib/i18n/config';
const slugs=['solutions','sectors','warehouse-racking','retail-shelving','projects','about','jeddah','riyadh','contact','privacy','terms'];
export function generateStaticParams(){return slugs.map(slug=>({slug}))}
export const dynamicParams = false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params; const path=`/${slug}`; const item=pageMeta[path];const isLegal=slug==='privacy'||slug==='terms';const title=item?.title||(slug==='privacy'?'سياسة الخصوصية | الشامخ':'شروط الاستخدام | الشامخ');const description=item?.description||(slug==='privacy'?'تعرف على طريقة إعداد رسالة التواصل عبر واتساب، واستضافة موقع الشامخ، وخدمات قياس الزيارات والروابط الخارجية.':'تعرّف على طبيعة معلومات المنتجات والصور، وتأكيد الأسعار ونطاق التوريد ومناطق خدمة الشامخ في جدة والرياض.');const canonical=canonicalUrl(path);return {title:{absolute:title},description,...(canonical?{alternates:alternateMetadata(slug as ContentSlug, 'ar')}:{}),robots:{index:isSearchIndexingEnabled&&!isLegal,follow:isSearchIndexingEnabled&&!isLegal},openGraph:{type:'website',locale:'ar_SA',siteName:company,title,description,...(canonical?{url:canonical}:{})},twitter:{card:'summary_large_image',title,description}}}
function BreadcrumbSchema({slug,label}:{slug:string;label:string}){if(!isSearchIndexingEnabled||!siteOrigin)return null;const data={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'الرئيسية',item:canonicalUrl('/')},{'@type':'ListItem',position:2,name:label,item:canonicalUrl(`/${slug}`)}]};return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}
function ServiceSchema({slug,label}:{slug:string;label:string}){if(!isSearchIndexingEnabled||!siteOrigin||!['warehouse-racking','retail-shelving','jeddah','riyadh'].includes(slug))return null;const city=slug==='jeddah'?'جدة':slug==='riyadh'?'الرياض':null;const regionalArea=[{'@type':'City',name:'جدة'},{'@type':'City',name:'الرياض'}];const serviceName=slug==='jeddah'?'حلول الرفوف والتخزين في جدة':slug==='riyadh'?'حلول الرفوف والتخزين في الرياض':slug==='retail-shelving'?'رفوف المحلات والسوبر ماركت':label;const areaServed=['jeddah','riyadh'].includes(slug)?[{'@type':'City',name:city}]:regionalArea;const data={'@context':'https://schema.org','@type':'Service',name:serviceName,serviceType:serviceName,url:canonicalUrl(`/${slug}`),provider:{'@id':`${siteOrigin}/#organization`},areaServed};return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}
function Solutions(){return <SolutionsView/>}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!slugs.includes(slug))notFound();const label=({'solutions':'حلولنا','sectors':'القطاعات','warehouse-racking':'رفوف المستودعات','retail-shelving':'رفوف المحلات والسوبر ماركت','projects':'صور الحلول','about':'من نحن','jeddah':'جدة','riyadh':'الرياض','contact':'تواصل معنا','privacy':'سياسة الخصوصية','terms':'شروط الاستخدام'} as Record<string,string>)[slug];return <main><BreadcrumbSchema slug={slug} label={label}/><ServiceSchema slug={slug} label={label}/>{slug==='solutions'?<Solutions/>:slug==='sectors'?<SectorsView/>:slug==='warehouse-racking'?<WarehouseRackingView/>:slug==='retail-shelving'?<RetailShelvingView/>:slug==='projects'?<ProjectsView/>:slug==='about'?<AboutView/>:slug==='jeddah'?<JeddahView/>:slug==='riyadh'?<RiyadhView/>:slug==='contact'?<ContactView/>:<LegalView type={slug==='privacy'?'privacy':'terms'}/>}</main>}

